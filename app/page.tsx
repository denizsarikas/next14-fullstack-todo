import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return data;
}

const Home = async () => {
  const data = await getData();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">Deniz To-do-app</span>

      <span className="text-orange-700 ml-2">
        This is a fullstack todo app just made with next14 and prisma *not responsive*
      </span>
      <div className="flex justify-center flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {data.map((todo, id) => (
            <div className="w-full" key={id}>
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
