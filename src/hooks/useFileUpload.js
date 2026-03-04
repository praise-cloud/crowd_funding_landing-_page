import { useState, useCallback } from 'react';
import { validateFile } from '../utils/paymentConfig';

export const useFileUpload = (options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'],
    onFileSelect = null,
    onError = null
  } = options;

  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = useCallback((event) => {
    const selectedFile = event.target.files[0];

    if (!selectedFile) {
      setError(null);
      return;
    }

    // Validate file
    const validation = validateFile(selectedFile);

    if (!validation.valid) {
      setError(validation.error);
      setFile(null);
      setPreview(null);
      if (onError) onError(validation.error);
      return;
    }

    // Set file and preview
    setFile(selectedFile);
    setPreview(selectedFile.name);
    setError(null);

    // Call optional callback
    if (onFileSelect) {
      onFileSelect(selectedFile);
    }
  }, [maxSize, allowedTypes, onFileSelect, onError]);

  const removeFile = useCallback(() => {
    setFile(null);
    setPreview(null);
    setError(null);
  }, []);

  const uploadFile = useCallback(async (uploadFunction) => {
    if (!file) {
      setError('Please select a file first');
      return { success: false };
    }

    setIsUploading(true);
    setError(null);

    try {
      const result = await uploadFunction(file);
      setIsUploading(false);
      return { success: true, data: result };
    } catch (error) {
      setIsUploading(false);
      setError(error.message || 'Upload failed');
      if (onError) onError(error.message);
      return { success: false, error: error.message };
    }
  }, [file, onError]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    file,
    preview,
    error,
    isUploading,
    handleFileChange,
    removeFile,
    uploadFile,
    clearError
  };
};

// Hook for drag and drop file upload
export const useDragDrop = (options = {}) => {
  const {
    onFileDrop = null,
    onDragEnter = null,
    onDragLeave = null,
    allowedTypes = ['image/png', 'image/jpeg', 'application/pdf']
  } = options;

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
    if (onDragEnter) onDragEnter(event);
  }, [onDragEnter]);

  const handleDragLeave = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
    if (onDragLeave) onDragLeave(event);
  }, [onDragLeave]);

  const handleDragOver = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
  }, []);

  const handleDrop = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const files = Array.from(event.dataTransfer.files);
    const validFiles = files.filter(file =>
      allowedTypes.includes(file.type)
    );

    if (validFiles.length > 0 && onFileDrop) {
      onFileDrop(validFiles[0]);
    }
  }, [allowedTypes, onFileDrop]);

  return {
    isDragging,
    dragEvents: {
      onDragEnter: handleDragEnter,
      onDragLeave: handleDragLeave,
      onDragOver: handleDragOver,
      onDrop: handleDrop
    }
  };
};