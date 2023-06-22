import {
  List,
  ListItem,
  ListItemSuffix,
  Card,
  IconButton,
  Typography,
  Checkbox,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import useFetchTodos from "../api/hooks/useFetchTodos";

const list = [
  {
    _id: "1232",
    isActive: true,
    title: "Item one",
    body: "lorem10 lorem10 sdfj",
  },
  {
    _id: "1234",
    isActive: false,
    title: "Item one",
    body: "lorem10 lorem10 sdfj",
  },
  {
    _id: "12323",
    isActive: true,
    title: "Item one",
    body: "lorem10 lorem10 sdfj",
  },
  {
    _id: "12328",
    isActive: false,
    title: "Item one",
    body: "lorem10 lorem10 sdfj",
  },
];

export default function Todos() {
  const todos = useFetchTodos();
  console.log(todos, "todos");
  return (
    <Card className="w-96 mx-auto mt-28 pt-4">
      <Typography
        variant="h3"
        color="blue"
        textGradient
        className="text-center"
      >
        Todo list
      </Typography>
      <List>
        {list.map((item) => (
          <a href="#">
            <ListItem className="py-1 pr-1 pl-4">
              <p className={`${!item.isActive && "line-through"}`}>
                {item.title}
              </p>
              {item.isActive && (
                <ListItemSuffix className="inline-flex">
                  <Checkbox
                    id="vertical-list-react"
                    ripple={false}
                    className="hover:before:opacity-0"
                    containerProps={{
                      className: "p-2 mt-[1.2px]",
                    }}
                  />
                  <IconButton variant="text" color="blue-gray" ripple={false}>
                    <PencilSquareIcon className="h-5 w-5 text-gray-500" />
                  </IconButton>
                  <IconButton variant="text" color="blue-gray" ripple={false}>
                    <TrashIcon className="h-5 w-5" />
                  </IconButton>
                </ListItemSuffix>
              )}
            </ListItem>
          </a>
        ))}
      </List>
    </Card>
  );
}
