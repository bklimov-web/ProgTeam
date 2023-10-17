import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "components/shared/ui/dialog";
import DropzoneComponent from "./drag-and-drop";

interface ImageUploadModalProps {
  onImageUpload: (img: string) => void;
}

const ImageUploadModal = ({ onImageUpload }: ImageUploadModalProps) => {
  const handleDrop = async (acceptedFiles: any) => {
    "use server";
    if (acceptedFiles && acceptedFiles.length > 0) {
      onImageUpload(acceptedFiles);
    }
  };

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Image loader</DialogTitle>

        {/*<Dropzone onDrop={handleDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()} className="dropzone">
                <input {...getInputProps()} />
                <p>Drag & drop an image here, or click to select one</p>
              </div>
            )}
            <DragAndDrop />
          </Dropzone>*/}
        <DropzoneComponent handleDrop={handleDrop} />
      </DialogHeader>
    </DialogContent>
  );
};

export default ImageUploadModal;
