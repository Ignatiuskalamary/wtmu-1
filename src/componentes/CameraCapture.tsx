import { useRef, useState, useEffect } from "react";
import { FaCamera, FaRedo, FaCheck } from "react-icons/fa";

interface CameraCaptureProps {
  onPhotoTaken: (photo: string) => void;
}

const CameraCapture = ({ onPhotoTaken }: CameraCaptureProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Start camera when component mounts
  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" }, // Front camera
        audio: false,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
        setStream(mediaStream);
      }
    } catch (err) {
      setError("Could not access camera. Please check permissions.");
      console.error("Camera error:", err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const takePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      // Set canvas dimensions to match video
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      // Draw current video frame to canvas
      context?.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert to data URL and set as preview
      const photoDataUrl = canvas.toDataURL("image/jpeg");
      setPhotoPreview(photoDataUrl);
      setPhotoTaken(true);
      stopCamera();
    }
  };

  const retakePhoto = () => {
    setPhotoTaken(false);
    setPhotoPreview(null);
    startCamera();
  };

  const confirmPhoto = () => {
    if (photoPreview) {
      onPhotoTaken(photoPreview);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {error ? (
        <div className="text-red-500 p-4 bg-red-50 rounded-lg">{error}</div>
      ) : (
        <>
          {!photoTaken ? (
            <div className="relative">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="w-full max-w-md rounded-lg border-2 border-gray-200"
              />
              <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                <button
                  onClick={takePhoto}
                  className="bg-white rounded-full p-4 shadow-lg hover:bg-gray-100"
                  aria-label="Take photo"
                >
                  <FaCamera className="text-gray-700 text-xl" />
                </button>
              </div>
              <canvas ref={canvasRef} className="hidden" />
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                {photoPreview && (
                  <img
                    src={photoPreview}
                    alt="Profile preview"
                    className="w-full max-w-md rounded-lg border-2 border-gray-200"
                  />
                )}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
                  <button
                    onClick={retakePhoto}
                    className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100"
                    aria-label="Retake photo"
                  >
                    <FaRedo className="text-gray-700 text-lg" />
                  </button>
                  <button
                    onClick={confirmPhoto}
                    className="bg-green-500 rounded-full p-3 shadow-lg hover:bg-green-600"
                    aria-label="Confirm photo"
                  >
                    <FaCheck className="text-white text-lg" />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                Adjust your photo before confirming
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default CameraCapture;
