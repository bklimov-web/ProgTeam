import { useRef } from 'react';
import { useClickOutside } from './lib/hooks';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: Props) => {
  const ref = useRef(null);
  
  useClickOutside(ref, () => {
    setIsOpen(false)
  });

  return (
    <div ref={ref} className={`fixed inset-0 w-[320px] h-full bg-white shadow-2xl ease-in-out duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      Sidebar
    </div>
  )
}

export default Sidebar;