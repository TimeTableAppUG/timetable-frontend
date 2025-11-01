export default FileInput = ({ onFileSelect }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    onFileSelect(file);
  };

  return <Input type="file" onChange={handleFileChange()} />;
};
