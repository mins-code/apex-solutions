import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        description: { type: String },
        price: { type: Number },
        hardwareCost: { type: Number },
        isAvailable: { type: Boolean, required: true, default: true },
        image: { type: String },
        video: { type: String },
        pdfUrl: { type: String },
        videoAspectRatio: { type: String, default: "16/9" },
        category: { type: String },
    },
    { timestamps: true }
);

export default mongoose.models.Project || mongoose.model("Project", ProjectSchema);
