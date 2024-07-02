// import React, { useState, useEffect } from "react";
// import {
//   Grid,
//   TextField,
//   Typography,
//   Button,
//   FormControlLabel,
//   Checkbox,
// } from "@mui/material";

// const sweetsData = {
//   "Marvels Menu": [
//     { name: "Gulab Jamun", grams: 50 },
//     { name: "Rasgulla", grams: 55 },
//     { name: "Jalebi", grams: 60 },
//     { name: "Barfi", grams: 65 },
//     { name: "Ladoo", grams: 70 },
//     { name: "Peda", grams: 75 },
//     { name: "Sandesh", grams: 80 },
//     { name: "Rasmalai", grams: 50 },
//     { name: "Kaju Katli", grams: 55 },
//     { name: "Halwa", grams: 60 },
//     { name: "Modak", grams: 65 },
//     { name: "Mysore Pak", grams: 70 },
//     { name: "Cham Cham", grams: 75 },
//     { name: "Malpua", grams: 80 },
//     { name: "Soan Papdi", grams: 50 },
//     { name: "Kalakand", grams: 55 },
//     { name: "Patishapta", grams: 60 },
//   ],
//   "VIP Menu": [
//     { name: "Gulab Jamun", grams: 65 },
//     { name: "Rasgulla", grams: 70 },
//     { name: "Jalebi", grams: 75 },
//     { name: "Barfi", grams: 80 },
//     { name: "Ladoo", grams: 50 },
//     { name: "Peda", grams: 55 },
//     { name: "Sandesh", grams: 60 },
//     { name: "Rasmalai", grams: 65 },
//     { name: "Kaju Katli", grams: 70 },
//     { name: "Halwa", grams: 75 },
//     { name: "Modak", grams: 80 },
//     { name: "Mysore Pak", grams: 50 },
//     { name: "Cham Cham", grams: 55 },
//     { name: "Malpua", grams: 60 },
//     { name: "Soan Papdi", grams: 65 },
//     { name: "Kalakand", grams: 70 },
//   ],
//   "Luxury Menu": [
//     { name: "Gulab Jamun", grams: 75 },
//     { name: "Rasgulla", grams: 80 },
//     { name: "Jalebi", grams: 50 },
//     { name: "Barfi", grams: 55 },
//     { name: "Ladoo", grams: 60 },
//     { name: "Peda", grams: 65 },
//     { name: "Sandesh", grams: 70 },
//     { name: "Rasmalai", grams: 75 },
//     { name: "Kaju Katli", grams: 80 },
//     { name: "Halwa", grams: 50 },
//     { name: "Modak", grams: 55 },
//     { name: "Mysore Pak", grams: 60 },
//     { name: "Cham Cham", grams: 65 },
//     { name: "Malpua", grams: 70 },
//   ],
//   Delight: [
//     { name: "Gulab Jamun", grams: 75 },
//     { name: "Rasgulla", grams: 80 },
//     { name: "Jalebi", grams: 50 },
//     { name: "Barfi", grams: 55 },
//     { name: "Ladoo", grams: 60 },
//     { name: "Peda", grams: 65 },
//     { name: "Sandesh", grams: 70 },
//     { name: "Rasmalai", grams: 75 },
//     { name: "Kaju Katli", grams: 80 },
//     { name: "Halwa", grams: 50 },
//     { name: "Modak", grams: 55 },
//     { name: "Mysore Pak", grams: 60 },
//     { name: "Cham Cham", grams: 65 },
//   ],
// };

// const SweetsForm = ({ formData, onBack, onSubmit }) => {
//   const [selectedSweets, setSelectedSweets] = useState({});
//   const [totalGrams, setTotalGrams] = useState(0);
//   const [maxGrams, setMaxGrams] = useState(0);

//   useEffect(() => {
//     const weightMap = { "1kg": 1000, "500gm": 500, "250gm": 250 };
//     setMaxGrams(weightMap[formData.weight] || 0);
//   }, [formData.weight]);

//   const handleCheck = (name, grams) => {
//     setSelectedSweets((prev) => {
//       const newSelected = { ...prev, [name]: prev[name] ? undefined : grams };
//       const newTotal = Object.values(newSelected).reduce(
//         (acc, grams) => acc + (grams || 0),
//         0
//       );
//       setTotalGrams(newTotal);
//       return newSelected;
//     });
//   };

//   const handleGramsChange = (name, grams) => {
//     setSelectedSweets((prev) => {
//       const newSelected = { ...prev, [name]: grams };
//       const newTotal = Object.values(newSelected).reduce(
//         (acc, grams) => acc + (grams || 0),
//         0
//       );
//       setTotalGrams(newTotal);
//       return newSelected;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (totalGrams > maxGrams) {
//       alert(
//         `Total grams exceed the selected weight limit of ${maxGrams} grams`
//       );
//     } else {
//       onSubmit(selectedSweets);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <Typography variant="h4" gutterBottom>
//         Select Sweets
//       </Typography>
//       <Grid container spacing={3}>
//         {sweetsData[formData.boxType]?.map((sweet, index) => (
//           <Grid item xs={12} sm={6} key={index}>
//             <FormControlLabel
//               control={
//                 <Checkbox
//                   checked={!!selectedSweets[sweet.name]}
//                   onChange={() => handleCheck(sweet.name, sweet.grams)}
//                 />
//               }
//               label={
//                 <TextField
//                   label={sweet.name}
//                   value={selectedSweets[sweet.name] || sweet.grams}
//                   onChange={(e) =>
//                     handleGramsChange(sweet.name, parseInt(e.target.value))
//                   }
//                   type="number"
//                   InputProps={{ inputProps: { min: 0 } }}
//                 />
//               }
//             />
//           </Grid>
//         ))}
//         <Grid item xs={12}>
//           <Typography>Total Grams: {totalGrams}</Typography>
//         </Grid>
//         <Grid item xs={12}>
//           <Button onClick={onBack} variant="contained" color="secondary">
//             Back
//           </Button>
//           <Button type="submit" variant="contained" color="primary">
//             Submit
//           </Button>
//         </Grid>
//       </Grid>
//     </form>
//   );
// };

// export default SweetsForm;


import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const sweetsData = {
  "Marvels Menu": [
    {  name: "Gulab Jamun", grams: 50 },
    { name: "Rasgulla", grams: 55 },
    { name: "Jalebi", grams: 60 },
    { name: "Barfi", grams: 65 },
    { name: "Ladoo", grams: 70 },
    { name: "Peda", grams: 75 },
    { name: "Sandesh", grams: 80 },
    { name: "Rasmalai", grams: 50 },
    { name: "Kaju Katli", grams: 55 },
    { name: "Halwa", grams: 60 },
    { name: "Modak", grams: 65 },
    { name: "Mysore Pak", grams: 70 },
    { name: "Cham Cham", grams: 75 },
    { name: "Malpua", grams: 80 },
    { name: "Soan Papdi", grams: 50 },
    { name: "Kalakand", grams: 55 },
    { name: "Patishapta", grams: 60 },
  ],
  "VIP Menu": [
    { name: "Gulab Jamun", grams: 65 },
    { name: "Rasgulla", grams: 70 },
    { name: "Jalebi", grams: 75 },
    { name: "Barfi", grams: 80 },
    { name: "Ladoo", grams: 50 },
    { name: "Peda", grams: 55 },
    { name: "Sandesh", grams: 60 },
    { name: "Rasmalai", grams: 65 },
    { name: "Kaju Katli", grams: 70 },
    { name: "Halwa", grams: 75 },
    { name: "Modak", grams: 80 },
    { name: "Mysore Pak", grams: 50 },
    { name: "Cham Cham", grams: 55 },
    { name: "Malpua", grams: 60 },
    { name: "Soan Papdi", grams: 65 },
    { name: "Kalakand", grams: 70 },
  ],
  "Luxury Menu": [
    { name: "Gulab Jamun", grams: 75 },
    { name: "Rasgulla", grams: 80 },
    { name: "Jalebi", grams: 50 },
    { name: "Barfi", grams: 55 },
    { name: "Ladoo", grams: 60 },
    { name: "Peda", grams: 65 },
    { name: "Sandesh", grams: 70 },
    { name: "Rasmalai", grams: 75 },
    { name: "Kaju Katli", grams: 80 },
    { name: "Halwa", grams: 50 },
    { name: "Modak", grams: 55 },
    { name: "Mysore Pak", grams: 60 },
    { name: "Cham Cham", grams: 65 },
    { name: "Malpua", grams: 70 },
  ],
  Delight: [
    { name: "Gulab Jamun", grams: 75 },
    { name: "Rasgulla", grams: 80 },
    { name: "Jalebi", grams: 50 },
    { name: "Barfi", grams: 55 },
    { name: "Ladoo", grams: 60 },
    { name: "Peda", grams: 65 },
    { name: "Sandesh", grams: 70 },
    { name: "Rasmalai", grams: 75 },
    { name: "Kaju Katli", grams: 80 },
    { name: "Halwa", grams: 50 },
    { name: "Modak", grams: 55 },
    { name: "Mysore Pak", grams: 60 },
    { name: "Cham Cham", grams: 65 },
  ],
};

const SweetsForm = ({ formData, onBack, onSubmit }) => {
  const [selectedSweets, setSelectedSweets] = useState({});
  const [totalGrams, setTotalGrams] = useState(0);
  const [maxGrams, setMaxGrams] = useState(0);

  useEffect(() => {
    const weightMap = { "1kg": 1000, "500gm": 500, "250gm": 250 };
    setMaxGrams(weightMap[formData.weight] || 0);
  }, [formData.weight]);

  const handleCheck = (name, grams,) => {
    setSelectedSweets((prev) => {
      const newSelected = { ...prev };
      if (prev[name]) {
        delete newSelected[name];
      } else {
        newSelected[name] = grams;
      }
      const newTotal = Object.values(newSelected).reduce((acc, grams) => acc + grams, 0);
      setTotalGrams(newTotal);
      return newSelected;
    });
  };

  const handleGramsChange = (name, grams) => {
    setSelectedSweets((prev) => {
      const newSelected = { ...prev, [name]: grams };
      const newTotal = Object.values(newSelected).reduce((acc, grams) => acc + (grams || 0), 0);
      setTotalGrams(newTotal);
      return newSelected;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (totalGrams > maxGrams) {
      alert(`Total grams exceed the selected weight limit of ${maxGrams} grams`);
    } else {
      onSubmit(selectedSweets);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Typography variant="h4" gutterBottom>
        Select Sweets
      </Typography>
      <Grid container spacing={3}>
        {sweetsData[formData.boxType]?.map((sweet, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={!!selectedSweets[sweet.name]}
                  onChange={() => handleCheck(sweet.name, sweet.grams)}
                />
              }
              label={
                <TextField
                  label={sweet.name}
                  value={selectedSweets[sweet.name] || sweet.grams}
                  onChange={(e) => handleGramsChange(sweet.name, parseInt(e.target.value))}
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                />
              }
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography>Total Grams: {totalGrams}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button onClick={onBack} variant="contained" color="secondary">
            Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default SweetsForm;

