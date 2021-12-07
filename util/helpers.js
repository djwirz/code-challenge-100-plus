function generateMBI() {
  // no off the shelf library easily accessible
  // magic
  // add more and random responses
  const validMBIs = ["1EG4-TE5-MK73"];

  return validMBIs[0];
}

function validateMBI(MBI) {
  //regex liberated from https://www.regextester.com/99391
  const mbiChecker = new RegExp(
    "^[1-9]{1}[^SLOIBZsloibz|^0-9]{1}[^SLOIBZsloibz]{1}[0-9]{1}-?[^SLOIBZsloibz|^0-9]{1}[^SLOIBZsloibz]{1}[0-9]{1}-?[^SLOIBZsloibz|^0-9]{1}[^SLOIBZsloibz|^0-9]{1}[0-9]{1}[0-9]{1}"
  );

  return mbiChecker.test(MBI);
}

// validateMBI("1EG4-TE5-MK73"); //valid
// validateMBI("1EG4TE5MK73"); //valid
// validateMBI("1EG4TE5MK7"); //invalid

module.exports = { generateMBI, validateMBI };
