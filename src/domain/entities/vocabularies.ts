import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ContextItem } from "./contextItem.js";

@Schema({collection:'vocabularies', timestamps:false})
export class VocabularyDocument extends Document{
    @Prop({required:true, unique:true})
    eventId:string;

    @Prop({ required:true })
    term:string;

    @Prop({ required:true })
    translation:string;

    @Prop({ type:[String], default:[]})
    tag:string[];

    @Prop({ type:[SchemaFactory.createForClass(ContextItem)],required:true })
    contexts:ContextItem[];

    @Prop({required:true, default:()=> new Date().toISOString() })
    created_at:string;

    
}
