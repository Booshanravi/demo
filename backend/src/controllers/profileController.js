const profileService = require("../services/profileService");

// -------- FULL PROFILE --------
const getFullProfile = async (req, res) => {
  try {
    const data = await profileService.getFullProfile(req.params.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch full profile" });
  }
};

// -------- PROFILE --------
const updateProfile = async (req, res) => {
  try {
    const result = await profileService.updateProfile(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update profile" });
  }
};

const updateTheme = async (req, res) => {
  try {
    const { theme } = req.body;
    const result = await profileService.updateTheme(req.params.id, theme);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update theme" });
  }
};

// -------- SKILLS --------
const endorseSkill = async (req, res) => {
  try {
    const result = await profileService.endorseSkill(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to endorse skill" });
  }
};

const addSkill = async (req, res) => {
  try {
    const result = await profileService.addSkill(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add skill" });
  }
};

const deleteSkill = async (req, res) => {
  try {
    const result = await profileService.deleteSkill(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete skill" });
  }
};

// -------- EXPERIENCE --------
const addExperience = async (req, res) => {
  try {
    const result = await profileService.addExperience(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add experience" });
  }
};

const updateExperience = async (req, res) => {
  try {
    const result = await profileService.updateExperience(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update experience" });
  }
};

const deleteExperience = async (req, res) => {
  try {
    const result = await profileService.deleteExperience(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete experience" });
  }
};

// -------- EDUCATION --------
const addEducation = async (req, res) => {
  try {
    const result = await profileService.addEducation(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add education" });
  }
};

const updateEducation = async (req, res) => {
  try {
    const result = await profileService.updateEducation(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update education" });
  }
};

const deleteEducation = async (req, res) => {
  try {
    const result = await profileService.deleteEducation(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete education" });
  }
};

// -------- CERTIFICATION --------
const addCertification = async (req, res) => {
  try {
    const result = await profileService.addCertification(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add certification" });
  }
};

const deleteCertification = async (req, res) => {
  try {
    const result = await profileService.deleteCertification(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete certification" });
  }
};

// -------- SOCIAL LINKS --------
const addSocialLink = async (req, res) => {
  try {
    const result = await profileService.addSocialLink(req.body);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to add social link" });
  }
};

const deleteSocialLink = async (req, res) => {
  try {
    const result = await profileService.deleteSocialLink(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to delete social link" });
  }
};

// -------- CAREER VISION --------
const updateCareerVision = async (req, res) => {
  try {
    const result = await profileService.updateCareerVision(req.params.id, req.body);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Failed to update career vision" });
  }
};

module.exports = {
  getFullProfile,
  updateProfile,
  updateTheme,
  endorseSkill,
  addSkill,
  deleteSkill,
  addExperience,
  updateExperience,
  deleteExperience,
  addEducation,
  updateEducation,
  deleteEducation,
  addCertification,
  deleteCertification,
  addSocialLink,
  deleteSocialLink,
  updateCareerVision
};
