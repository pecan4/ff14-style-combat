// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000401010300000000000000000000000007020206030000000000000000000000070202020800000000000000000000000000000000000000040100000000000000000000000004010502000000000000000000000004050202020000000000000000000004050202020201010101010101010101050202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 . . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . 2 2 
. . . . . . . . . . . . 2 2 2 2 
. . . . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,grafxkid.springGroundTop,grafxkid.springGround,grafxkid.springGroundTopRight,grafxkid.springGroundTopLeft,grafxkid.springGroundInnerBottomRight,grafxkid.springGroundInnerBottomLeft,grafxkid.springGroundLeft,grafxkid.springGroundRight], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
