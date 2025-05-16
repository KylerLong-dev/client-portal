export default function UploadPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Upload Assets</h1>
      <p>Upload your project files and assets here.</p>
      <form className="mt-4">
        <input type="file" className="mb-2" />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">Upload</button>
      </form>
    </main>
  );
} 