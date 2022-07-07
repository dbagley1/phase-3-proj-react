import BirdPreview from "./BirdPreview";

function ColorPalette(props) {
  const { palette, birdPreview, deleteButton, saveButton, index, onSave, onDelete } = props;
  return (
    <div>
      <div className="palette-box" id={palette.id || index}>
        <h3 className="palette-title">
          {palette.name}
        </h3>
        <span>{palette.id && `(#${palette.id})`}</span>
        {birdPreview && <BirdPreview index={palette.id || index} colors={palette.colors} />}
        <div className="palette-colors">
          {
            palette.colors.map(function (color, i) {
              return <div key={color.id || i} className="color-block" style={{ backgroundColor: color.hex }}></div>;
            })
          }
        </div>
        <div className="palette-btns">
          {saveButton && (<button className="save-btn" onClick={() => onSave(palette)}>Save</button>)}
          {deleteButton && (<button className="delete-btn" onClick={() => onDelete(palette)}>Delete</button>)}
        </div>
      </div>
    </div>
  );
}

export default ColorPalette;
