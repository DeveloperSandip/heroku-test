const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema({
  product_id: String,
  brand: String,
  series: String,
  product_name: String,
  seller_info: {
    name: String,
    rating: Number,
    policies: Array,
  },
  specifications: {
    gerneral: {
      box_contains: Array,
      model_number: String,
      model_name: String,
      color: String,
      browse_type: String,
      sim_type: String,
      hybrid_sim_slot: Boolean,
      tochscreen: Boolean,
      otg_compatible: Boolean,
    },
    display: {
      size: {
        unit: String,
        height: Number,
      },
      resolution: {
        unit: String,
        height: Number,
        width: Number,
      },
    },
    os_processor: {
      os: String,
      processor_core: String,
      clock_speed: String,
    },
    memory_storage: {
      internal_storage: String,
      ram: String,
      expandable_storage: String,
      supported_memory_type: String,
      memory_card_slot_type: String,
    },
    camera: {
      primary: {
        availability: Boolean,
        camera: String,
        features: Array,
      },
      secondary: {
        availability: Boolean,
        camera: String,
      },
    },
    connectivity: {
      network_type: Array,
      supported: Array,
    },
    battery: {
      capacity: String,
      isRemovable: Boolean,
    },
    dimensions: {
      measurement_unit: String,
      width: Number,
      height: Number,
      depth: Number,
      weight: {
        measurement_unit: String,
        weight: Number,
      },
    },
    warranty: {
      summary: String,
    },
  },
  manufacturer: {
    name: String,
    address: String,
  },
  importer: {
    name: String,
    address: String,
  },
  packer: {
    name: String,
    address: String,
  },
  origin: String,
  ratings: {
    rate: Number,
    count: Number,
    review_count: Number,
  },
  price: {
    currency: String,
    price: Number,
  },
  inStock: true,
  qty: Number,
  highlights: Array,
  payment_options: {
    emi: {
      availability: Boolean,
    },
    debit_card: Boolean,
    credit_card: Boolean,
  },
  description: {
    heading: String,
    body: String,
  },
  thumbnails: Array,
});

mongoose.model("product", ProductSchema);
module.exports = mongoose.model("product");
