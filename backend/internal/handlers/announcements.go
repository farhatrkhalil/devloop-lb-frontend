package handlers

import (
	"context"
	"github.com/enesbuyuk/university-student-club-website/internal/config"
	"github.com/enesbuyuk/university-student-club-website/internal/models"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo/options"
	"strconv"
	"time"
)

func GetAnnouncements(c *fiber.Ctx) error {
	var announcements []models.AnnouncementModel
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	limit, err := strconv.Atoi(c.Query("limit", "100"))
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid limit value"})
	}
	if limit > 200 {
		return c.Status(400).JSON(fiber.Map{"error": "Limit value is too high"})
	}

	cursor, err := config.DB.Collection("announcements").Find(ctx, bson.M{}, options.Find().SetSort(bson.M{"date": -1}).SetLimit(int64(limit)))
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Data could not be retrieved"})
	}
	defer cursor.Close(ctx)

	if err := cursor.All(ctx, &announcements); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Data could not be processed"})
	}

	return c.JSON(announcements)
}

func PostAnnouncements(c *fiber.Ctx) error {
	announcement := new(models.AnnouncementModel)
	if err := c.BodyParser(announcement); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": err.Error()})
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	_, err := config.DB.Collection("announcements").InsertOne(ctx, announcement)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Data could not be inserted"})
	}

	return c.JSON(announcement)
}

func PutAnnouncements(c *fiber.Ctx) error {
	id := c.Params("id")
	updateData := new(models.AnnouncementModel)

	if err := c.BodyParser(updateData); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": err.Error()})
	}

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid ID format"})
	}

	filter := bson.M{"_id": objID}
	update := bson.M{"$set": updateData}

	result, err := config.DB.Collection("announcements").UpdateOne(ctx, filter, update)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not update announcement"})
	}
	if result.MatchedCount == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Announcement not found"})
	}

	return c.JSON(fiber.Map{"message": "Announcement updated successfully"})
}

func DeleteAnnouncements(c *fiber.Ctx) error {
	id := c.Params("id")

	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	objID, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Invalid ID format"})
	}

	filter := bson.M{"_id": objID}
	result, err := config.DB.Collection("announcements").DeleteOne(ctx, filter)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": "Could not delete announcement"})
	}
	if result.DeletedCount == 0 {
		return c.Status(404).JSON(fiber.Map{"error": "Announcement not found"})
	}

	return c.JSON(fiber.Map{"message": "Announcement deleted successfully"})
}
