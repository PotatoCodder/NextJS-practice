export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2023 Adrian Website</p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm">Terms of Service</a>
          <a href="#" className="text-sm">Privacy Policy</a>
        </div>
      </div>
    </footer>
  )
}
