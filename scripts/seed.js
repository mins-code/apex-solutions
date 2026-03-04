import mongoose from "mongoose";
import dotenv from "dotenv";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'path';

// Load env vars from .env.local
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: join(__dirname, '../.env.local') });

// Simple localized schema for the seeding script
const ProjectSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number },
    isAvailable: { type: Boolean, required: true, default: true },
    image: { type: String },
    video: { type: String },
    pdfUrl: { type: String },
    videoAspectRatio: { type: String, default: "16/9" },
    category: { type: String },
}, { timestamps: true });

const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

const PROJECTS = [
    {
        id: "industry",
        title: "Industry Automation",
        description: "Designed for immersive automation with deep machine learning and quantum-level precise mechanics.",
        image: "/images/industry-cover.png",
        video: "/videos/industry.mp4",
        isAvailable: true,
        pdfUrl: "/docs/industry-automation.pdf",
    },
    {
        id: "parking",
        title: "Smart Parking System",
        description: "Designed for immersive vehicle storage with dynamic spatial reconfiguration sensors.",
        image: "/images/parking-cover.png",
        video: "/videos/parking.mp4",
        isAvailable: true,
        pdfUrl: "/docs/smart-parking.pdf",
    },
    {
        id: "fan",
        title: "Smart Automated Fan",
        description: "Intelligent air circulation system powered by environmental monitoring and automated response.",
        image: "/images/fan-cover.png",
        video: null,
        isAvailable: true,
        pdfUrl: "/docs/smart-automated-fan.pdf",
    }
];

async function seedDB() {
    try {
        console.log("Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME || "apex_solutions"
        });
        console.log("Connected successfully.");

        console.log("Emptying old project data...");
        await Project.deleteMany({});

        console.log("Inserting new projects...");
        await Project.insertMany(PROJECTS);

        console.log("Data Seeded Successfully!");
        process.exit(0);
    } catch (error) {
        console.error("Seeding Error:", error);
        process.exit(1);
    }
}

seedDB();
