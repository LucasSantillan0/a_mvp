import mongoose from 'mongoose'

export interface IHouse {
    houseName: string,
    address: string
}

interface HouseDocument extends mongoose.Document, IHouse { }

interface HouseModel extends mongoose.Model<HouseDocument> {
    build(attr: IHouse): HouseDocument
}

const houseSchema = new mongoose.Schema({
    houseName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})

export const House = mongoose.model<HouseDocument, HouseModel>('House', houseSchema)

houseSchema.statics.build = (attr: IHouse) => {
    return new House(attr)
}








