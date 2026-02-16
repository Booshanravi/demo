const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");
const upload = require("../config/multer");

router.post(
  "/upload/:id",
  upload.single("profilepic"),
  async (req, res) => {
    try {
      const imagePath = `/uploads/${req.file.filename}`;

      await pool.query(
        "UPDATE profile SET profilepic=$1 WHERE id=$2",
        [imagePath, req.params.id]
      );

      res.json({ message: "Image uploaded", imagePath });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Upload failed" });
    }
  }
);

// Full profile
router.get("/full/:id", profileController.getFullProfile);

// Profile
router.put("/:id", profileController.updateProfile);
router.put("/:id/theme", profileController.updateTheme);

// Skills
router.post("/skills", profileController.addSkill);
router.post("/skills/:id/endorse", profileController.endorseSkill);
router.delete("/skills/:id", profileController.deleteSkill);

// Experience
router.post("/experience", profileController.addExperience);
router.put("/experience/:id", profileController.updateExperience);
router.delete("/experience/:id", profileController.deleteExperience);

// Education
router.post("/education", profileController.addEducation);
router.put("/education/:id", profileController.updateEducation);
router.delete("/education/:id", profileController.deleteEducation);

// Certification
router.post("/certification", profileController.addCertification);
router.delete("/certification/:id", profileController.deleteCertification);


// Social Links
router.post("/social-links", profileController.addSocialLink);
router.delete("/social-links/:id", profileController.deleteSocialLink);

// Career Vision
router.put("/career-vision/:id", profileController.updateCareerVision);

module.exports = router;
router.post("/upload/:id", upload.single("image"), async (req, res) => {
  try {
    const profileId = req.params.id;
    const imagePath = `/uploads/${req.file.filename}`;

    await pool.query(
      "UPDATE profile SET profilepic = $1 WHERE id = $2",
      [imagePath, profileId]
    );

    res.json({ message: "Profile picture updated", imagePath });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});
