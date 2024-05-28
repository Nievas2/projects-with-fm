import "@/app/globals.css"
export default function ItemList({text} : {text:string}) {
  return (
    <ul>
      <li>
        <img
          src="/icon-list.png"
          alt="icon list"
          width={15}
          height={15}
          className="image-list"
        />
        <small className="text-list">{text}</small>
      </li>
    </ul>
  )
}
