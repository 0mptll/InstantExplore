import Country from "../models/Country.js";

const getCountries = async (req, res) => {
    const countries = await Country.find();
    if(!countries)res.status(404);
    res.status(200).json(countries);
}

const getCountry = async (req, res) => {
    const country = await Country.findById(req.params.id);
    if (!country) return res.status(404).json({ message: "country not found" });
    res.status(200).json(country);

}
const createCountry = async (req, res) => {
    try {
      const { name } = req.body;
  
      // Check if a country with the same name already exists
      const existingCountry = await Country.findOne({ name });
      if (existingCountry) {
        return res.status(400).json({ message: 'Country with this name already exists' });
      }
  
      // Create a new Country document
      const country = new Country(req.body);
  
      // Save the new country
      await country.save();
      res.status(201).json(country);
    } catch (error) {
      // Handle any errors
      res.status(500).json({ message: error.message });
    }
  };
  

const updateCountry = async (req, res) => {
    const country = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!country) return res.status(404).json({ message: "Country not found" });
    res.status(200).json(country);
}

const deleteCountry = async (req, res) => {
    const country = await Country.findByIdAndDelete(req.params.id);
    if (!country) return res.status(404).json({ message: "Country not found" });
    
    res.status(204).json({message: "Country deleted successfully" });
}
export {getCountries,getCountry,createCountry, updateCountry, deleteCountry};