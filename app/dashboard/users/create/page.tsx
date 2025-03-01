import Form from "@/app/ui/create-user";
import Breadcrumbs from "@/app/ui/breadcrumbs";

export default function page() {
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "users", href: "/dashboard/users" },
          {
            label: "Create user",
            href: "/dashboard/users/create",
            active: true,
          },
        ]}
      />
      <Form />
    </main>
  );
}
