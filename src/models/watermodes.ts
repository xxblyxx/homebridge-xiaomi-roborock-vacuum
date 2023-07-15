import type { SpeedModes } from "./types";

export const watermodes: SpeedModes = {
  // S5-Max (https://github.com/homebridge-xiaomi-roborock-vacuum/homebridge-xiaomi-roborock-vacuum/issues/79#issuecomment-576246934)
  gen1: [
    // 0%      = Off
    {
      homekitTopLevel: 0,
      miLevel: 200,
      name: "Off",
    },
    // 1-35%   = "Light"
    {
      homekitTopLevel: 35,
      miLevel: 201,
      name: "Light",
    },
    // 36-70%  = "Medium"
    {
      homekitTopLevel: 70,
      miLevel: 202,
      name: "Medium",
    },
    // 71-100% = "High"
    {
      homekitTopLevel: 100,
      miLevel: 203,
      name: "High",
    },
  ],
  // S6-MaxV + Custom
  "gen1+custom": [
    // 0%      = Off
    {
      homekitTopLevel: 0,
      miLevel: 200,
      name: "Off",
    },
    // 1-25%   = "Light"
    {
      homekitTopLevel: 25,
      miLevel: 201,
      name: "Light",
    },
    // 26-50%  = "Medium"
    {
      homekitTopLevel: 50,
      miLevel: 202,
      name: "Medium",
    },
    // 51-75% = "High"
    {
      homekitTopLevel: 75,
      miLevel: 203,
      name: "High",
    },
    // 76-100% = "Custom"
    {
      homekitTopLevel: 100,
      miLevel: 204,
      name: "Custom",
    },
  ],
  // custom preference is not to run mop, increasing lower range to support
  "gen1+customLessMop": [
    // 0%      = Off
    {
        homekitTopLevel: 0,
        miLevel: 200,
        name: "Off",
    },
    // 1-10%      = Off
    {
        homekitTopLevel: 20,
        miLevel: 200,
        name: "Off",
    },
    // 21-50%   = "Light"
    {
        homekitTopLevel: 50,
        miLevel: 201,
        name: "Light",
    },
    // 51-70%  = "Medium"
    {
        homekitTopLevel: 70,
        miLevel: 202,
        name: "Medium",
    },
    // 71-90% = "High"
    {
        homekitTopLevel: 90,
        miLevel: 203,
        name: "High",
    },
    // 91-100% = "Custom"
    {
        homekitTopLevel: 100,
        miLevel: 204,
        name: "Custom",
    },
  ],
};
