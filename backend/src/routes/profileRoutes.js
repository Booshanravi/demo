const express = require("express");
const router = express.Router();
const profileController = require("../controllers/profileController");

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
