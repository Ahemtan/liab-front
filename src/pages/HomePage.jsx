import React from 'react'
import { toast } from "react-hot-toast";
const HomePage = () => {
  return (
    <div>

      <button onClick={() => toast.success('Hello') }>Taost</button>

    </div>
  )
}

export default HomePage