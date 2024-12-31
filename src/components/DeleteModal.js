const DeleteModal = ({ task, onCancel, onConfirm }) => {
    if (!task) return null; // Prevent rendering if task is null or undefined
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-lg font-medium">
            Are you sure you want to delete "{task.text}"?
          </p>
          <div className="flex justify-end space-x-4 mt-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default DeleteModal;