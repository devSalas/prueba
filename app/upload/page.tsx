import { FileUpload } from '@/components/file-upload';

export default function UploadPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <FileUpload />
      </div>
    </main>
  );
}