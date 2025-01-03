import { useEffect, useState } from "react";
import SearchBar from "../../SearchBar"; // Import SearchBar component

const Market = () => {
  const [cards, setCards] = useState([]); // State to store the card data
  const [filteredCards, setFilteredCards] = useState([]); // State to store filtered cards
  const [filters, setFilters] = useState({
    set: "",
    type: "",
    condition: "",
    rarity: "",
  }); // State for filters
  const [sets, setSets] = useState([]); // State to store sets for filtering
  const [types, setTypes] = useState([]); // State to store types for filtering
  const [rarities, setRarities] = useState([]); // State to store rarities for filtering
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const apiKey = "0d833c75-eeef-46b0-91ee-ff8510d635be"; // API key

  // Fetch all filter data (sets, types, rarities) from the API
  useEffect(() => {
    const fetchFilterData = async () => {
      try {
        // Fetch sets, types, and rarities (same as your existing logic)
        const setsResponse = await fetch("https://api.pokemontcg.io/v2/sets", {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        const setsData = await setsResponse.json();
        setSets(setsData.data || []);

        const typesResponse = await fetch("https://api.pokemontcg.io/v2/types", {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        const typesData = await typesResponse.json();
        setTypes(typesData.data || []);

        const raritiesResponse = await fetch("https://api.pokemontcg.io/v2/rarities", {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        const raritiesData = await raritiesResponse.json();
        setRarities(raritiesData.data || []);
      } catch (error) {
        console.error("Error fetching filter data:", error);
      }
    };

    fetchFilterData();
  }, []); // Run this once on mount

  // Fetch cards on mount (same logic as before)
  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("https://api.pokemontcg.io/v2/cards?pageSize=600", {
          headers: { Authorization: `Bearer ${apiKey}` },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch cards");
        }
        const data = await response.json();
        setCards(data.data);
        setFilteredCards(data.data); // Initially set filtered cards to all fetched cards
      } catch (error) {
        console.error("Error fetching Pokémon cards:", error);
      }
    };

    fetchCards();
  }, []);

  // Apply filters to cards
  const applyFilters = () => {
    let filtered = cards;

    // Apply each filter
    if (filters.set) {
      filtered = filtered.filter((card) => card.set.name === filters.set);
    }
    if (filters.type) {
      filtered = filtered.filter((card) => card.supertype === filters.type);
    }
    if (filters.condition) {
      filtered = filtered.filter((card) => card.condition === filters.condition);
    }
    if (filters.rarity) {
      filtered = filtered.filter((card) => card.rarity === filters.rarity);
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((card) =>
        card.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredCards(filtered); // Update the filtered cards
  };

  // Whenever filters or search term changes, apply filters
  useEffect(() => {
    applyFilters();
  },); // Trigger filter whenever filters or cards change

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      set: "",
      type: "",
      condition: "",
      rarity: "",
    });
    setSearchTerm(""); // Clear search term
    setFilteredCards(cards); // Show all cards again
  };

  return (
    <div>
      {/* Filter Navbar */}
      <div className="flex space-x-4 mb-6 p-4 text-white rounded-lg shadow-md shadow-gray-700">
        <select
          name="set"
          value={filters.set}
          onChange={handleFilterChange}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="">Select Set</option>
          {sets.map((set) => (
            <option key={set.id} value={set.id}>
              {set.name}
            </option>
          ))}
        </select>
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
        <select
          name="condition"
          value={filters.condition}
          onChange={handleFilterChange}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="">Select Condition</option>
          <option value="damage">Damage</option> {/* Example condition */}
        </select>
        <select
          name="rarity"
          value={filters.rarity}
          onChange={handleFilterChange}
          className="bg-gray-700 p-2 rounded"
        >
          <option value="">Select Rarity</option>
          {rarities.map((rarity) => (
            <option key={rarity.id} value={rarity.id}>
              {rarity.name}
            </option>
          ))}
        </select>

        {/* Search Bar on the right side */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <button
          onClick={clearFilters}
          className="bg-red-600 text-white p-2 rounded"
        >
          Clear Filters
        </button>
      </div>

      {/* Display Filtered Cards */}
      <div className="grid grid-cols-4 gap-6 p-72 z-">
        {filteredCards.map((card) => (
          <div key={card.id} className="text-white bg-white border rounded shadow">
            <img
              src={card.images.large}
              alt={card.name}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Market;
