"use client";
import { Button } from "@/components";
import { useForm } from "@tanstack/react-form";

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async ({ value }) => {
      console.log(value, "value");
    },
  });
  return (
    <div className="border p-6">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="flex flex-col gap-3">
          <form.Field name="fullName">
            {(field) => (
              <>
                <input
                  className="border border-gray-400 rounded py-2 px-2 text-sm outline-none"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your full name"
                />
              </>
            )}
          </form.Field>
          <form.Field name="email">
            {(field) => (
              <>
                <input
                  className="border border-gray-400 rounded py-2 px-2 text-sm outline-none"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Enter your email"
                />
              </>
            )}
          </form.Field>
          <form.Field name="password">
            {(field) => (
              <>
                <input
                  className="border border-gray-400 rounded py-2 px-2 text-sm outline-none"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Password"
                />
              </>
            )}
          </form.Field>
          <form.Field name="confirmPassword">
            {(field) => (
              <>
                <input
                  className="border border-gray-400 rounded py-2 px-2 text-sm outline-none"
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Confirm Password"
                />
              </>
            )}
          </form.Field>
        </div>
        <Button className="bg-orange-600" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
