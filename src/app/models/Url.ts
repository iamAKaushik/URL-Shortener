import mongoose, {Document , Model , mongo, Schema} from "mongoose";

const urlSchema = new mongoose.Schema({
    originalUrl: {
        type: String,
        required : true,
        unique : true
    },
    shortUrl: {
        type: String,
        required : true,
        unique : true
    }
},{
    timestamps: true
});


export interface IUrl extends Document {
    originalUrl: String,
    shortUrl: String
}

const Url: Model<IUrl> = mongoose.models.Url || mongoose.model<IUrl> ('Url',urlSchema);

export default Url;