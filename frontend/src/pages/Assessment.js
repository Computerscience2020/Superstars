import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Slider,
  InputLabel,
  Select,
  MenuItem,
  Divider,
  CircularProgress,
  Stack,
  Alert
} from '@mui/material';

// Define the assessment sections
const steps = [
  'Basic Information',
  'Health Goals',
  'Sleep Patterns',
  'Nutrition',
  'Physical Activity',
  'Stress & Recovery'
];

const Assessment = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Information
    age: '',
    gender: '',
    height: '',
    weight: '',
    
    // Health Goals
    primaryGoal: '',
    secondaryGoals: [],
    motivationLevel: 5,
    
    // Sleep Patterns
    averageSleepHours: '',
    sleepQuality: '',
    sleepConsistency: '',
    
    // Nutrition
    dietType: '',
    mealFrequency: '',
    waterIntake: '',
    
    // Physical Activity
    exerciseFrequency: '',
    exerciseTypes: [],
    activityLevel: '',
    
    // Stress & Recovery
    stressLevel: 5,
    relaxationPractices: [],
    workLifeBalance: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSliderChange = (name) => (e, newValue) => {
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    
    try {
      // In a real app, this would be an API call to submit the assessment
      console.log('Submitting assessment data:', formData);
      
      // Simulate API call delay
      setTimeout(() => {
        // Navigate to results page with a mock assessment ID
        navigate('/results/new-assessment-123');
      }, 2000);
    } catch (error) {
      console.error('Error submitting assessment:', error);
      setSubmitting(false);
    }
  };

  // Render form based on active step
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Basic Information
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              This information helps us provide personalized health insights based on your demographics.
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 3 }}>
              <TextField
                label="Age"
                name="age"
                type="number"
                value={formData.age}
                onChange={handleChange}
                fullWidth
                required
              />
              
              <FormControl fullWidth required>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  row
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>
              
              <TextField
                label="Height (cm)"
                name="height"
                type="number"
                value={formData.height}
                onChange={handleChange}
                fullWidth
                required
              />
              
              <TextField
                label="Weight (kg)"
                name="weight"
                type="number"
                value={formData.weight}
                onChange={handleChange}
                fullWidth
                required
              />
            </Stack>
          </Box>
        );
        
      case 1:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Health Goals
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Understanding your goals helps us tailor recommendations to what matters most to you.
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 3 }}>
              <FormControl fullWidth required>
                <InputLabel>Primary Health Goal</InputLabel>
                <Select
                  name="primaryGoal"
                  value={formData.primaryGoal}
                  onChange={handleChange}
                  label="Primary Health Goal"
                >
                  <MenuItem value="longevity">Increase Longevity</MenuItem>
                  <MenuItem value="weight">Weight Management</MenuItem>
                  <MenuItem value="energy">Improve Energy Levels</MenuItem>
                  <MenuItem value="sleep">Better Sleep Quality</MenuItem>
                  <MenuItem value="stress">Reduce Stress</MenuItem>
                  <MenuItem value="performance">Enhance Physical Performance</MenuItem>
                  <MenuItem value="cognitive">Optimize Cognitive Function</MenuItem>
                  <MenuItem value="mood">Improve Mood & Emotional Wellbeing</MenuItem>
                </Select>
              </FormControl>
              
              <Box>
                <FormLabel>Motivation Level</FormLabel>
                <Slider
                  name="motivationLevel"
                  value={formData.motivationLevel}
                  onChange={handleSliderChange('motivationLevel')}
                  min={1}
                  max={10}
                  step={1}
                  marks
                  valueLabelDisplay="auto"
                  aria-labelledby="motivation-level-slider"
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Low</Typography>
                  <Typography variant="body2" color="text.secondary">High</Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
        );
        
      case 2:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Sleep Patterns
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Quality sleep is a fundamental pillar of health and longevity.
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 3 }}>
              <TextField
                label="Average Sleep Hours"
                name="averageSleepHours"
                type="number"
                value={formData.averageSleepHours}
                onChange={handleChange}
                fullWidth
                required
              />
              
              <FormControl fullWidth required>
                <FormLabel>Sleep Quality</FormLabel>
                <RadioGroup
                  name="sleepQuality"
                  value={formData.sleepQuality}
                  onChange={handleChange}
                >
                  <FormControlLabel value="excellent" control={<Radio />} label="Excellent - Wake refreshed" />
                  <FormControlLabel value="good" control={<Radio />} label="Good - Generally rested" />
                  <FormControlLabel value="fair" control={<Radio />} label="Fair - Sometimes tired" />
                  <FormControlLabel value="poor" control={<Radio />} label="Poor - Often tired" />
                  <FormControlLabel value="very_poor" control={<Radio />} label="Very Poor - Always exhausted" />
                </RadioGroup>
              </FormControl>
              
              <FormControl fullWidth required>
                <FormLabel>Sleep Consistency</FormLabel>
                <RadioGroup
                  name="sleepConsistency"
                  value={formData.sleepConsistency}
                  onChange={handleChange}
                >
                  <FormControlLabel value="very_consistent" control={<Radio />} label="Very consistent schedule" />
                  <FormControlLabel value="mostly_consistent" control={<Radio />} label="Mostly consistent" />
                  <FormControlLabel value="somewhat_variable" control={<Radio />} label="Somewhat variable" />
                  <FormControlLabel value="highly_variable" control={<Radio />} label="Highly variable/shift work" />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Box>
        );
        
      case 3:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Nutrition
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Your dietary patterns significantly impact your health and longevity.
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 3 }}>
              <FormControl fullWidth required>
                <InputLabel>Diet Type</InputLabel>
                <Select
                  name="dietType"
                  value={formData.dietType}
                  onChange={handleChange}
                  label="Diet Type"
                >
                  <MenuItem value="omnivore">Omnivore (All foods)</MenuItem>
                  <MenuItem value="mediterranean">Mediterranean</MenuItem>
                  <MenuItem value="vegetarian">Vegetarian</MenuItem>
                  <MenuItem value="vegan">Vegan</MenuItem>
                  <MenuItem value="paleo">Paleo</MenuItem>
                  <MenuItem value="keto">Ketogenic</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth required>
                <InputLabel>Meal Frequency</InputLabel>
                <Select
                  name="mealFrequency"
                  value={formData.mealFrequency}
                  onChange={handleChange}
                  label="Meal Frequency"
                >
                  <MenuItem value="1-2">1-2 meals per day</MenuItem>
                  <MenuItem value="3">3 meals per day</MenuItem>
                  <MenuItem value="4-5">4-5 meals per day</MenuItem>
                  <MenuItem value="grazing">Frequent snacking/grazing</MenuItem>
                  <MenuItem value="intermittent">Intermittent fasting</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth required>
                <InputLabel>Water Intake</InputLabel>
                <Select
                  name="waterIntake"
                  value={formData.waterIntake}
                  onChange={handleChange}
                  label="Water Intake"
                >
                  <MenuItem value="low">Less than 1 liter daily</MenuItem>
                  <MenuItem value="moderate">1-2 liters daily</MenuItem>
                  <MenuItem value="high">2-3 liters daily</MenuItem>
                  <MenuItem value="very_high">More than 3 liters daily</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        );
        
      case 4:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Physical Activity
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Regular physical activity is one of the strongest predictors of healthy lifespan.
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 3 }}>
              <FormControl fullWidth required>
                <InputLabel>Exercise Frequency</InputLabel>
                <Select
                  name="exerciseFrequency"
                  value={formData.exerciseFrequency}
                  onChange={handleChange}
                  label="Exercise Frequency"
                >
                  <MenuItem value="sedentary">Rarely or never</MenuItem>
                  <MenuItem value="light">1-2 times per week</MenuItem>
                  <MenuItem value="moderate">3-4 times per week</MenuItem>
                  <MenuItem value="active">5-6 times per week</MenuItem>
                  <MenuItem value="very_active">Daily</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl fullWidth required>
                <InputLabel>Activity Level</InputLabel>
                <Select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleChange}
                  label="Activity Level"
                >
                  <MenuItem value="sedentary">Sedentary (Desk job, little movement)</MenuItem>
                  <MenuItem value="lightly_active">Lightly Active (Standing job or light walking)</MenuItem>
                  <MenuItem value="moderately_active">Moderately Active (Regular exercise or active job)</MenuItem>
                  <MenuItem value="very_active">Very Active (Hard exercise/sports 6-7 days/week)</MenuItem>
                  <MenuItem value="extremely_active">Extremely Active (Physical job + training)</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        );
        
      case 5:
        return (
          <Box>
            <Typography variant="h6" gutterBottom>
              Stress & Recovery
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Effective stress management protects your health and slows biological aging.
            </Typography>
            
            <Stack spacing={3} sx={{ mt: 3 }}>
              <Box>
                <FormLabel>Stress Level</FormLabel>
                <Slider
                  name="stressLevel"
                  value={formData.stressLevel}
                  onChange={handleSliderChange('stressLevel')}
                  min={1}
                  max={10}
                  step={1}
                  marks
                  valueLabelDisplay="auto"
                  aria-labelledby="stress-level-slider"
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography variant="body2" color="text.secondary">Low</Typography>
                  <Typography variant="body2" color="text.secondary">High</Typography>
                </Box>
              </Box>
              
              <FormControl fullWidth required>
                <InputLabel>Work-Life Balance</InputLabel>
                <Select
                  name="workLifeBalance"
                  value={formData.workLifeBalance}
                  onChange={handleChange}
                  label="Work-Life Balance"
                >
                  <MenuItem value="excellent">Excellent - Perfect balance</MenuItem>
                  <MenuItem value="good">Good - Mostly balanced</MenuItem>
                  <MenuItem value="fair">Fair - Occasionally imbalanced</MenuItem>
                  <MenuItem value="poor">Poor - Often imbalanced</MenuItem>
                  <MenuItem value="very_poor">Very Poor - No balance</MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Box>
        );
        
      default:
        return null;
    }
  };

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Longevity Health Assessment
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Complete this comprehensive assessment to receive personalized health insights and recommendations.
      </Typography>
      
      <Stepper activeStep={activeStep} alternativeLabel sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      
      <Card>
        <CardContent>
          {activeStep === steps.length ? (
            <Box sx={{ textAlign: 'center', py: 3 }}>
              {submitting ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <CircularProgress size={60} sx={{ mb: 3 }} />
                  <Typography variant="h6">
                    Processing your assessment...
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Our AI is analyzing your data to generate personalized recommendations
                  </Typography>
                </Box>
              ) : (
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Ready to Submit Your Assessment
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Your assessment is complete. Click submit to receive your personalized health insights.
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleSubmit}
                    size="large"
                    sx={{ mt: 2 }}
                  >
                    Submit Assessment
                  </Button>
                </Box>
              )}
            </Box>
          ) : (
            <Box>
              {renderStepContent(activeStep)}
              
              <Divider sx={{ my: 4 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  variant="outlined"
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default Assessment;
