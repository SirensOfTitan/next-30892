
export async function foo() {
  if (typeof window === "undefined") {
    const fs = await import("fs");
    console.log(typeof fs, "server");
  } else {
    console.log("browser");
  }
}
