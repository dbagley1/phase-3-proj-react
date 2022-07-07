import { useState } from "react";
import ColorPalette from "./ColorPalette";

function PaletteList(props) {
  const { deletePalette, savePalette } = props;
  const { palettes, birdPreview, deleteButton, saveButton } = props;

  function onSavePalette(palette) {
    props.savePalette(palette);
  }

  function onDeletePalette(palette) {
    props.deletePalette(palette);
  }

  return (
    <div>
      {/* {JSON.stringify(palettes)} */}
      <div className="palettes-container">
        {palettes.map((palette, i) => (
          <ColorPalette key={palette.id || i} index={i} palette={palette} birdPreview={birdPreview} deleteButton={deleteButton} saveButton={saveButton} onSave={onSavePalette} onDelete={onDeletePalette} />
        ))}
      </div>
    </div>
  );
}

export default PaletteList;
