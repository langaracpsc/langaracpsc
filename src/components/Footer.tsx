

function Footer() {
  return (
    <div>  
    <footer className="bg-black text-gray-300 py-8">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-orange-500 mb-6">
          Connect With Us
        </h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="mailto:csclub@langara.ca"
            className="hover:text-orange-500"
          >
            Email
          </a>
          <a
            href="https://discord.gg"
            target="_blank"
            className="hover:text-orange-500"
          >
            Discord
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="hover:text-orange-500"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="hover:text-orange-500"
          >
            Twitter
          </a>
          <a
            href="https://github.com"
            target="_blank"
            className="hover:text-orange-500"
          >
            GitHub
          </a>
        </div>
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Langara Computer Science Club. All
          Rights Reserved.
        </p>
      </div>
    </footer></div>
  )
}

export default Footer