import {
    DocumentType,
    getModelForClass,
    index,
    modelOptions,
    pre,
    prop,
  } from "@typegoose/typegoose";
  import bcrypt from "bcryptjs";
  
  index({ title: 1 })
@modelOptions({
  schemaOptions: {
    // Add createdAt and updatedAt fields
    timestamps: true,
  },
})

// Export the Presentation class to be used as TypeScript type
export class Presentation {
  @prop()
  title: string;

  @prop()
  description: string;

  @prop()
  components: Array<Component>;
}
  }
  
  // Create the presentation model from the Presentation class
  const presentationModel = getModelForClass(Presentation);
  export default presentationModel;
  