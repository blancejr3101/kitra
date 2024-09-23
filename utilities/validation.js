


const validateGeolocationInputs = (payload) => {

  const errors = [];


  if (!latitude || !longitude) {
    errors.push('Latitude and longitude are required');
  }

  if (!distance || distance !== 1 && distance !== 10) {
    errors.push('Distance must be 1 or 10');
  }

  if (prizeValue && (prizeValue < 10 || prizeValue > 30 || prizeValue % 1 !== 0)) {
    errors.push('Prize value must be between $10 and $30 and a whole number');
  }

  return errors.length > 0 ? errors.join(', ') : null;
};

module.exports = { validateGeolocationInputs };