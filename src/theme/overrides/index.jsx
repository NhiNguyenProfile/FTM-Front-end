import Box from "./Box";
import Button from "./Button";
import Card from "./Card";
import List from "./List";
import TextField from "./TextField";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
  return Object.assign(
    Button(theme),
    TextField(theme),
    List(theme),
    Card(theme),
    Box(theme)
  );
}
