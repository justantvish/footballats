
export interface TableDataObj {
  colsWidth?: string[];
  player_name?: string;
  [key: string]: any;
}

export interface PlayersTableObj extends TableDataObj {
  player_key_passes?: string;
  player_type?: string;
  player_passes?: string | number;
  player_duels_won?: string | number;
  player_goals?: string | number;
  player_number?: string | number;
  player_birthdate?: string | Date;
  player_image?: string;
}

export interface NavItemObj {
  notReady?: boolean;
  icon?: string;
  path?: string;
  title?: string;
  group?: string;
  end?: boolean;
}