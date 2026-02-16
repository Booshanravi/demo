const pool = require("../config/db");

// ---------------- PROFILE ----------------

const getProfile = async () => {
  const result = await pool.query("SELECT * FROM profile LIMIT 1");
  return result.rows[0];
};

const createProfile = async (data) => {
  const { name, role, location, bio, email, profilePic } = data;

  const result = await pool.query(
    `INSERT INTO profile (name, role, location, bio, email, profilePic)
     VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
    [name, role, location, bio, email, profilePic]
  );

  return result.rows[0];
};

const updateProfile = async (id, data) => {
  const { name, role, location, bio, email, profilePic } = data;

  const result = await pool.query(
    `UPDATE profile
     SET name=$1, role=$2, location=$3, bio=$4, email=$5, profilePic=$6
     WHERE id=$7 RETURNING *`,
    [name, role, location, bio, email, profilePic, id]
  );

  return result.rows[0];
};

const updateTheme = async (id, theme) => {
  const result = await pool.query(
    `UPDATE profile SET theme=$1 WHERE id=$2 RETURNING *`,
    [theme, id]
  );
  return result.rows[0];
};

// ---------------- SKILLS ----------------

const endorseSkill = async (id) => {
  const result = await pool.query(
    `UPDATE skills
     SET endorsement_count = endorsement_count + 1
     WHERE id=$1
     RETURNING *`,
    [id]
  );
  return result.rows[0];
};

const addSkill = async (data) => {
  const { profile_id, skill_name } = data;

  const result = await pool.query(
    `INSERT INTO skills (profile_id, skill_name)
     VALUES ($1,$2)
     RETURNING *`,
    [profile_id, skill_name]
  );

  return result.rows[0];
};

const deleteSkill = async (id) => {
  await pool.query("DELETE FROM skills WHERE id=$1", [id]);
  return { message: "Skill deleted successfully" };
};

// ---------------- EXPERIENCE ----------------

const addExperience = async (data) => {
  const { profile_id, title, company, start_date, end_date, description } = data;

  const result = await pool.query(
    `INSERT INTO experience (profile_id, title, company, start_date, end_date, description)
     VALUES ($1,$2,$3,$4,$5,$6)
     RETURNING *`,
    [profile_id, title, company, start_date, end_date, description]
  );

  return result.rows[0];
};

const updateExperience = async (id, data) => {
  const { title, company, start_date, end_date, description } = data;

  const result = await pool.query(
    `UPDATE experience
     SET title=$1, company=$2, start_date=$3, end_date=$4, description=$5
     WHERE id=$6
     RETURNING *`,
    [title, company, start_date, end_date, description, id]
  );

  return result.rows[0];
};

const deleteExperience = async (id) => {
  await pool.query("DELETE FROM experience WHERE id=$1", [id]);
  return { message: "Experience deleted successfully" };
};

// ---------------- EDUCATION ----------------

const addEducation = async (data) => {
  const { profile_id, degree, institution, start_date, end_date } = data;

  const result = await pool.query(
    `INSERT INTO education (profile_id, degree, institution, start_date, end_date)
     VALUES ($1,$2,$3,$4,$5)
     RETURNING *`,
    [profile_id, degree, institution, start_date, end_date]
  );

  return result.rows[0];
};

const updateEducation = async (id, data) => {
  const { degree, institution, start_date, end_date } = data;

  const result = await pool.query(
    `UPDATE education
     SET degree=$1, institution=$2, start_date=$3, end_date=$4
     WHERE id=$5
     RETURNING *`,
    [degree, institution, start_date, end_date, id]
  );

  return result.rows[0];
};

const deleteEducation = async (id) => {
  await pool.query("DELETE FROM education WHERE id=$1", [id]);
  return { message: "Education deleted successfully" };
};

// ---------------- CERTIFICATION ----------------

const addCertification = async (data) => {
  const { profile_id, title, issuer, year } = data;

  const result = await pool.query(
    `INSERT INTO certification (profile_id, title, issuer, year)
     VALUES ($1,$2,$3,$4)
     RETURNING *`,
    [profile_id, title, issuer, year]
  );

  return result.rows[0];
};

const deleteCertification = async (id) => {
  await pool.query("DELETE FROM certification WHERE id=$1", [id]);
  return { message: "Certification deleted successfully" };
};

// ---------------- SOCIAL LINKS ----------------

const addSocialLink = async (data) => {
  const { profile_id, platform, url } = data;

  const result = await pool.query(
    `INSERT INTO social_links (profile_id, platform, url)
     VALUES ($1,$2,$3)
     RETURNING *`,
    [profile_id, platform, url]
  );

  return result.rows[0];
};

const deleteSocialLink = async (id) => {
  await pool.query("DELETE FROM social_links WHERE id=$1", [id]);
  return { message: "Social link deleted successfully" };
};

// ---------------- CAREER VISION ----------------

const updateCareerVision = async (id, data) => {
  const { career_title, growth_stage, growth_space, inspired_by } = data;

  const result = await pool.query(
    `UPDATE career_vision
     SET career_title=$1, growth_stage=$2, growth_space=$3, inspired_by=$4
     WHERE id=$5
     RETURNING *`,
    [career_title, growth_stage, growth_space, inspired_by, id]
  );

  return result.rows[0];
};

// ---------------- FULL PROFILE ----------------

const getFullProfile = async (id) => {
  const profile = await pool.query("SELECT * FROM profile WHERE id=$1", [id]);
  const careerVision = await pool.query("SELECT * FROM career_vision WHERE profile_id=$1", [id]);
  const experiences = await pool.query("SELECT * FROM experience WHERE profile_id=$1", [id]);
  const education = await pool.query("SELECT * FROM education WHERE profile_id=$1", [id]);
  const certifications = await pool.query("SELECT * FROM certification WHERE profile_id=$1", [id]);
  const skills = await pool.query("SELECT * FROM skills WHERE profile_id=$1", [id]);
  const socialLinks = await pool.query("SELECT * FROM social_links WHERE profile_id=$1", [id]);

  return {
    profile: profile.rows[0] || null,
    careerVision: careerVision.rows[0] || null,
    experiences: experiences.rows || [],
    education: education.rows || [],
    certifications: certifications.rows || [],
    skills: skills.rows || [],
    socialLinks: socialLinks.rows || [],
  };
};

module.exports = {
  getProfile,
  createProfile,
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
  updateCareerVision,
  getFullProfile
};
