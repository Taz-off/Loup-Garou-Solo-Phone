const MIN_PLAYERS = 5;

const ROLE_ORDER = [
  "werewolf",
  "bigbadwolf",
  "seer",
  "witch",
  "spy",
  "hunter",
  "judge",
  "cupid",
  "villager",
  "angel",
  "jester",
  "flute",
  "saboteur",
  "rolehunter",
];

const ROLE_DEFINITIONS = {
  werewolf: {
    id: "werewolf",
    name: "Loup-Garou",
    team: "loups",
    unique: false,
    defaultCount: 1,
    setupDescription: "Vote la nuit pour choisir une victime avec les autres loups.",
    revealDescription: "Tu votes en secret chaque nuit pour une victime. Les votes des loups sont ensuite fusionnés.",
    objective: "Éliminer le village jusqu'à être au moins aussi nombreux que les autres survivants.",
  },
  bigbadwolf: {
    id: "bigbadwolf",
    name: "Grand Mechant Loup",
    team: "loups",
    unique: true,
    defaultCount: 1,
    setupDescription: "Vote avec les loups et peut ajouter une victime supplementaire tant qu'aucun loup n'est mort.",
    revealDescription: "Chaque nuit, tu votes comme les autres loups. Tant qu'aucun loup n'est mort dans la partie, tu peux aussi designer une victime supplementaire.",
    objective: "Eliminer le village avec la meute et profiter de ton pouvoir tant qu'aucun loup n'est tombe.",
  },
  seer: {
    id: "seer",
    name: "Voyante",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Observe secrètement le rôle exact d'un joueur chaque nuit.",
    revealDescription: "Chaque nuit, tu peux regarder le rôle exact d'un joueur vivant.",
    objective: "Aider le village à trouver les loups sans te faire repérer.",
  },
  witch: {
    id: "witch",
    name: "Sorcière",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Dispose d'une potion de vie et d'une potion de mort, chacune utilisable une seule fois.",
    revealDescription: "Tu peux sauver la cible des loups une fois, et tuer un autre joueur une fois sur toute la partie.",
    objective: "Utiliser tes potions au bon moment pour faire pencher la partie du côté du village.",
  },
  spy: {
    id: "spy",
    name: "Petite Fille",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Observe discrètement un message aleatoire provenant des loups sans voir son auteur.",
    revealDescription: "Pendant ton passage nocturne, tu peux lire un message aleatoire du fil des loups sans voir qui l'a ecrit.",
    objective: "Recuperer des indices sur la strategie des loups sans attirer l'attention.",
  },
  hunter: {
    id: "hunter",
    name: "Chasseur",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Si tu meurs, tu élimines immédiatement un dernier joueur.",
    revealDescription: "Si tu meurs, tu tires une dernière fois avant de quitter la partie.",
    objective: "Tomber au bon moment et emporter une cible utile avec toi.",
  },
  judge: {
    id: "judge",
    name: "Juge",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Peut annuler une elimination par vote une seule fois dans la partie.",
    revealDescription: "Apres le vote, tu peux une seule fois annuler l'elimination avant qu'elle ne soit appliquee.",
    objective: "Casser le bon vote au moment decisif pour proteger le village.",
  },
  cupid: {
    id: "cupid",
    name: "Cupidon",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Au début de la partie, lie deux joueurs qui deviennent amoureux.",
    revealDescription: "Tu agis une seule fois après la distribution des rôles pour choisir deux amoureux.",
    objective: "Créer un lien capable de survivre jusqu'à la fin de la partie.",
  },
  villager: {
    id: "villager",
    name: "Villageois",
    team: "village",
    unique: false,
    defaultCount: 1,
    setupDescription: "Aucun pouvoir spécial, mais ta voix compte au débat et au vote.",
    revealDescription: "Tu n'as pas de pouvoir nocturne. Ton arme, c'est le débat et le vote.",
    objective: "Aider le village à démasquer tous les loups.",
  },
  angel: {
    id: "angel",
    name: "Ange",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Gagne immédiatement s'il est éliminé lors du tout premier vote de jour.",
    revealDescription: "Si tu es éliminé au premier vote de jour, tu gagnes seul. Sinon tu rejoins le camp du village.",
    objective: "Te faire éliminer au premier vote, ou ensuite jouer comme un villageois.",
  },
  jester: {
    id: "jester",
    name: "Bouffon",
    team: "solo",
    unique: true,
    defaultCount: 1,
    setupDescription: "Gagne immediatement s'il est elimine directement par le vote du village.",
    revealDescription: "Tu n'as pas de pouvoir actif. Ton objectif est de te faire eliminer par le vote du village pour gagner.",
    objective: "Semer le doute et pousser le village a voter contre toi.",
  },
  flute: {
    id: "flute",
    name: "Joueur de Flûte",
    team: "solo",
    unique: true,
    defaultCount: 1,
    setupDescription: "Enchante deux joueurs chaque nuit et gagne si tous les autres survivants le sont.",
    revealDescription: "Chaque nuit, tu enchantes deux joueurs vivants. Si tous les autres survivants sont enchantés, tu gagnes.",
    objective: "Rester en vie et enchanter progressivement tous les autres survivants.",
  },
  saboteur: {
    id: "saboteur",
    name: "Saboteur",
    team: "village",
    unique: true,
    defaultCount: 1,
    setupDescription: "Bloque le pouvoir nocturne d'un autre joueur vivant.",
    revealDescription: "Chaque nuit, tu choisis un joueur vivant à saboter. Son pouvoir de cette nuit ne fonctionne pas.",
    objective: "Couper les bons pouvoirs au bon moment sans te faire remarquer.",
  },
  rolehunter: {
    id: "rolehunter",
    name: "Chasseur de role",
    team: "solo",
    unique: true,
    defaultCount: 1,
    setupDescription: "Recoit une cible secrete au debut et gagne des que cette cible meurt.",
    revealDescription: "Une cible secrete te sera attribuee au debut de la partie. Si elle meurt, tu gagnes immediatement.",
    objective: "Manipuler la table pour faire tomber ta cible, peu importe le moyen.",
  },
};

const MAX_CAMP_MESSAGE_LENGTH = 180;

const CAMP_THREAD_META = {
  village: {
    title: "Fil du camp gentil",
    description: "Messages anonymes visibles seulement par les non-loups.",
    emptyText: "Aucun message du camp gentil pour l'instant.",
    placeholder: "Partage un soupcon, un doute ou une hypothese...",
    submitLabel: "Envoyer anonymement",
  },
  wolves: {
    title: "Fil des loups",
    description: "Messages signes visibles seulement par les loups.",
    emptyText: "Aucun message des loups pour l'instant.",
    placeholder: "Propose une cible ou une consigne a la meute...",
    submitLabel: "Envoyer a la meute",
  },
};

const state = {
  screen: "home",
  playerDraft: "",
  players: [],
  roleConfig: createEmptyRoleConfig(),
  game: null,
  uiError: "",
};

let idCounter = 0;
const app = document.getElementById("app");

app.addEventListener("click", handleClick);
app.addEventListener("submit", handleSubmit);
app.addEventListener("input", handleInput);
app.addEventListener("change", handleChange);

render();

function createEmptyRoleConfig() {
  return ROLE_ORDER.reduce((config, roleId) => {
    config[roleId] = 0;
    return config;
  }, {});
}

function createEmptyCampMessages() {
  return {
    village: [],
    wolves: [],
  };
}

function createEmptyCampMessageDrafts() {
  return {
    village: "",
    wolves: "",
  };
}

function createId(prefix = "id") {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [copy[randomIndex], copy[index]];
  }
  return copy;
}

function sample(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function sumRoleConfig(roleConfig) {
  return Object.values(roleConfig).reduce((sum, count) => sum + count, 0);
}

function formatList(items) {
  if (items.length === 0) {
    return "";
  }
  if (items.length === 1) {
    return items[0];
  }
  if (items.length === 2) {
    return `${items[0]} et ${items[1]}`;
  }
  return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}

function pluralize(count, singular, plural = `${singular}s`) {
  return count > 1 ? plural : singular;
}

function clearUiError() {
  state.uiError = "";
}

function setUiError(message) {
  state.uiError = message;
}

function sanitizePlayerName(name) {
  return name.replace(/[&<>]/g, "").replace(/\s+/g, " ").trim();
}

function sanitizeCampMessage(content) {
  return String(content || "")
    .replace(/\s+/g, " ")
    .trim();
}

function getSuggestedComposition(playerCount) {
  const config = createEmptyRoleConfig();

  if (playerCount < MIN_PLAYERS) {
    return config;
  }

  config.werewolf = playerCount >= 11 ? 3 : playerCount >= 7 ? 2 : 1;
  if (playerCount >= 5) config.seer = 1;
  if (playerCount >= 5) config.witch = 1;
  if (playerCount >= 6) config.hunter = 1;
  if (playerCount >= 7) config.angel = 1;
  if (playerCount >= 8) config.flute = 1;
  if (playerCount >= 9) config.saboteur = 1;

  const usedSlots = sumRoleConfig(config);
  config.villager = Math.max(0, playerCount - usedSlots);
  return config;
}

function validateSetup(players, roleConfig) {
  const errors = [];
  const playerCount = players.length;
  const totalRoles = sumRoleConfig(roleConfig);

  if (playerCount < MIN_PLAYERS) {
    errors.push(`Ajoute au moins ${MIN_PLAYERS} joueurs pour lancer une partie.`);
  }

  const totalWolfRoles = ROLE_ORDER.filter((roleId) => isWolfRole(roleId)).reduce((sum, roleId) => {
    return sum + roleConfig[roleId];
  }, 0);

  if (totalWolfRoles < 1) {
    errors.push("Il faut au moins 1 role du camp des Loups-Garous dans la composition.");
  }

  if (totalRoles > playerCount) {
    errors.push("Il y a plus de rôles que de joueurs.");
  }

  if (totalRoles < playerCount) {
    errors.push("La somme des rôles doit correspondre exactement au nombre de joueurs.");
  }

  ROLE_ORDER.forEach((roleId) => {
    const role = ROLE_DEFINITIONS[roleId];
    if (role.unique && roleConfig[roleId] > 1) {
      errors.push(`${role.name} ne peut être présent qu'une seule fois.`);
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    playerCount,
    totalRoles,
  };
}

function buildRoleListFromConfig(roleConfig) {
  return ROLE_ORDER.flatMap((roleId) => {
    return Array.from({ length: roleConfig[roleId] }, () => roleId);
  });
}

function createGame() {
  const rolePool = shuffleArray(buildRoleListFromConfig(state.roleConfig));

  const players = state.players.map((player, index) => ({
    id: player.id,
    name: player.name,
    role: rolePool[index],
    alive: true,
    enchanted: false,
    hunterShotUsed: false,
    roleHunterTargetId: null,
    deathTurn: null,
  }));
  assignRoleHunterTargets(players);

  return {
    players,
    roleConfig: { ...state.roleConfig },
    campMessages: createEmptyCampMessages(),
    campMessageDrafts: createEmptyCampMessageDrafts(),
    campMessageOrder: 0,
    sentCampMessages: {},
    cupidUsed: false,
    judgePowerUsed: false,
    hasDeadWolf: false,
    lovers: [],
    revealOrder: players.map((player) => player.id),
    revealIndex: 0,
    nightNumber: 0,
    dayVoteCount: 0,
    angelCanWin: true,
    witchState: {
      healUsed: false,
      killUsed: false,
    },
    night: null,
    vote: null,
    judge: null,
    hunter: null,
    history: [],
    scene: "reveal-pass",
    summary: null,
    winner: null,
    postSummary: null,
  };
}

function assignRoleHunterTargets(players) {
  const candidates = players.map((player) => player.id);

  players
    .filter((player) => player.role === "rolehunter")
    .forEach((player) => {
      const possibleTargets = candidates.filter((targetId) => targetId !== player.id);
      player.roleHunterTargetId = possibleTargets.length ? sample(possibleTargets) : null;
    });
}

function getPlayer(game, playerId) {
  return game.players.find((player) => player.id === playerId) || null;
}

function getRoleHunterTarget(game, player) {
  return player?.roleHunterTargetId ? getPlayer(game, player.roleHunterTargetId) : null;
}

function getRoleTeam(roleId) {
  return ROLE_DEFINITIONS[roleId]?.team || null;
}

function getPlayerCamp(player) {
  if (!player) {
    return null;
  }

  return getRoleTeam(player.role) === "loups" ? "wolves" : "village";
}

function canPlayerUseCupidAction(game, player) {
  return Boolean(
    player &&
      player.alive &&
      player.role === "cupid" &&
      game.nightNumber === 1 &&
      !game.cupidUsed
  );
}

function isWolfRole(roleId) {
  return getRoleTeam(roleId) === "loups";
}

function canBigBadWolfUseExtraKill(game, player) {
  return Boolean(player && player.role === "bigbadwolf" && player.alive && !game.hasDeadWolf);
}

function getNightTurnPriority(game, player) {
  if (player.role === "saboteur") {
    return 0;
  }

  if (isWolfRole(player.role) || canPlayerUseCupidAction(game, player)) {
    return 1;
  }

  if (player.role === "seer" || player.role === "spy" || player.role === "flute" || player.role === "witch") {
    return 2;
  }

  return 3;
}

function buildNightTurnOrder(game) {
  const groups = [[], [], [], []];

  getLivingPlayers(game).forEach((player) => {
    groups[getNightTurnPriority(game, player)].push(player.id);
  });

  return groups.flatMap((group) => shuffleArray(group));
}

function getCurrentTurnKey(game, player, camp) {
  if (!player || !camp) {
    return null;
  }

  if (game.scene === "night-secret" || game.scene === "night-result") {
    return `night-${game.nightNumber}-${game.night.turnIndex}-${player.id}-${camp}`;
  }

  if (game.scene === "vote-secret" || game.scene === "vote-result") {
    return `vote-${game.nightNumber}-${game.vote.turnIndex}-${player.id}-${camp}`;
  }

  return `${game.scene}-${game.nightNumber}-${player.id}-${camp}`;
}

function hasSentCampMessageThisTurn(game, player, camp) {
  const turnKey = getCurrentTurnKey(game, player, camp);
  return Boolean(turnKey && game.sentCampMessages[turnKey]);
}

function markCampMessageSent(game, player, camp) {
  const turnKey = getCurrentTurnKey(game, player, camp);
  if (turnKey) {
    game.sentCampMessages[turnKey] = true;
  }
}

function renderNightActionPanel(player, content) {
  return `
    ${renderCampThreadPanel(player)}
    ${content}
  `;
}

function getCampThread(game, camp) {
  return camp ? game.campMessages[camp] || [] : [];
}

function getCampThreadMeta(camp) {
  return camp ? CAMP_THREAD_META[camp] || null : null;
}

function clearCampMessageDrafts(game) {
  game.campMessageDrafts = createEmptyCampMessageDrafts();
}

function clearCampMessageDraft(game, camp) {
  if (!camp) {
    return;
  }

  game.campMessageDrafts[camp] = "";
}

function addCampMessage(game, player, content) {
  const camp = getPlayerCamp(player);
  if (!camp) {
    return null;
  }

  game.campMessageOrder += 1;
  const message = {
    id: createId("camp-message"),
    order: game.campMessageOrder,
    camp,
    content,
    authorName: camp === "wolves" ? player.name : null,
  };
  game.campMessages[camp].push(message);
  return message;
}

function getPlayerLoverId(game, playerId) {
  if (!game.lovers || game.lovers.length !== 2) {
    return null;
  }

  if (game.lovers[0] === playerId) {
    return game.lovers[1];
  }

  if (game.lovers[1] === playerId) {
    return game.lovers[0];
  }

  return null;
}

function getPlayerLover(game, playerId) {
  const loverId = getPlayerLoverId(game, playerId);
  return loverId ? getPlayer(game, loverId) : null;
}

function getRoleHunterWinner(game) {
  return (
    game.players.find((player) => {
      if (player.role !== "rolehunter" || !player.roleHunterTargetId) {
        return false;
      }

      const target = getPlayer(game, player.roleHunterTargetId);
      return Boolean(target && !target.alive);
    }) || null
  );
}

function getRoleHunterVictory(game) {
  const roleHunterWinner = getRoleHunterWinner(game);
  if (!roleHunterWinner) {
    return null;
  }

  const target = getRoleHunterTarget(game, roleHunterWinner);
  return {
    key: "rolehunter",
    title: "Victoire du Chasseur de role",
    description: `${roleHunterWinner.name} voit sa cible ${target ? target.name : "secrete"} mourir et gagne immediatement.`,
  };
}

function getCurrentCampMessagePlayer(game) {
  if (game.scene === "night-secret") {
    return getCurrentNightPlayer(game);
  }

  return null;
}

function appendLoverDeathText(baseText, deaths, primaryId) {
  const collateralDeaths = deaths.filter((player) => player.id !== primaryId);
  if (!collateralDeaths.length) {
    return baseText;
  }

  const names = formatList(collateralDeaths.map((player) => player.name));
  return `${baseText} ${names} ${collateralDeaths.length > 1 ? "meurent" : "meurt"} aussi de chagrin.`;
}

function getLivingPlayers(game) {
  return game.players.filter((player) => player.alive);
}

function getDeadPlayers(game) {
  return game.players.filter((player) => !player.alive);
}

function findAliveRolePlayer(game, roleId) {
  return game.players.find((player) => player.alive && player.role === roleId) || null;
}

function getCurrentNightPlayer(game) {
  if (!game.night) {
    return null;
  }
  const currentId = game.night.order[game.night.turnIndex];
  return getPlayer(game, currentId);
}

function getCurrentVotePlayer(game) {
  if (!game.vote) {
    return null;
  }
  const currentId = game.vote.order[game.vote.turnIndex];
  return getPlayer(game, currentId);
}

function getCurrentHunter(game) {
  if (!game.hunter) {
    return null;
  }
  return getPlayer(game, game.hunter.hunterId);
}

function getCurrentJudge(game) {
  if (!game.judge) {
    return null;
  }
  return getPlayer(game, game.judge.judgeId);
}

function canJudgeReviewVote(game, eliminatedId) {
  const judge = findAliveRolePlayer(game, "judge");
  return Boolean(judge && eliminatedId && !game.judgePowerUsed);
}

function isPlayerSabotaged(game, playerId) {
  return Boolean(game.night && game.night.sabotageTargetId === playerId);
}

function getNightStageLabel(game) {
  const total = game.night.order.length;
  const current = game.night.turnIndex + 1;
  return `Passage nocturne ${current}/${total}`;
}

function getNightVictimFromWolves(game) {
  if (!game.night) {
    return null;
  }

  return game.night.wolfVictimId || computeWolfVictimFromVotes(game);
}

function computeWolfVictimFromVotes(game) {
  const counts = {};
  Object.values(game.night.wolfVotes)
    .filter(Boolean)
    .forEach((targetId) => {
      counts[targetId] = (counts[targetId] || 0) + 1;
    });

  const entries = Object.entries(counts);
  if (!entries.length) {
    return null;
  }

  const maxVotes = Math.max(...entries.map(([, count]) => count));
  const leaders = entries
    .filter(([, count]) => count === maxVotes)
    .map(([targetId]) => targetId);

  if (leaders.length === 1) {
    return leaders[0];
  }

  return sample(leaders);
}

function applyDeaths(game, targetIds, source) {
  const actualDeaths = [];
  const pendingIds = [...new Set(targetIds)];
  const resolvedIds = new Set();

  while (pendingIds.length > 0) {
    const targetId = pendingIds.shift();
    if (resolvedIds.has(targetId)) {
      continue;
    }

    resolvedIds.add(targetId);
    const player = getPlayer(game, targetId);
    if (!player || !player.alive) {
      continue;
    }

    player.alive = false;
    player.deathTurn = `${source}-${game.nightNumber}-${game.dayVoteCount}`;
    actualDeaths.push(player);

    if (isWolfRole(player.role)) {
      game.hasDeadWolf = true;
    }

    const loverId = getPlayerLoverId(game, player.id);
    const lover = loverId ? getPlayer(game, loverId) : null;
    if (lover && lover.alive && !resolvedIds.has(loverId)) {
      pendingIds.push(loverId);
    }
  }

  return actualDeaths;
}

function queueHunterIfNeeded(game, deaths, source) {
  const hunter = deaths.find((player) => player.role === "hunter" && !player.hunterShotUsed);

  if (!hunter) {
    return false;
  }

  if (source === "night" && isPlayerSabotaged(game, hunter.id)) {
    return false;
  }

  game.hunter = {
    hunterId: hunter.id,
    source,
    resultMessage: null,
    shotTargetId: null,
    nextScene: null,
  };

  return true;
}

function addHistory(game, title, text) {
  game.history.unshift({ id: createId("history"), title, text });
  game.history = game.history.slice(0, 6);
}

function finalizeGameOver(game, winner) {
  game.winner = winner;
  game.scene = "game-over";
  game.summary = null;
  game.postSummary = null;
}

function checkVictory(game) {
  const livingPlayers = getLivingPlayers(game);
  const livingWolves = livingPlayers.filter((player) => isWolfRole(player.role));
  const livingFlutist = livingPlayers.find((player) => player.role === "flute");
  const roleHunterVictory = getRoleHunterVictory(game);
  const loversAlive =
    game.lovers.length === 2 &&
    livingPlayers.length === 2 &&
    game.lovers.every((loverId) => livingPlayers.some((player) => player.id === loverId));

  // Priorité de victoire:
  // 1. Ange / Bouffon (gérés immédiatement au vote)
  // 2. Chasseur de role si sa cible est morte
  // 3. Amoureux s'ils sont les deux derniers survivants
  // 4. Joueur de Flute vivant avec tous les autres survivants enchantes
  // 5. Village si tous les loups sont morts
  // 6. Loups s'ils sont au moins aussi nombreux que tous les autres survivants
  if (roleHunterVictory) {
    return roleHunterVictory;
  }

  if (loversAlive) {
    const lovers = game.lovers.map((loverId) => getPlayer(game, loverId)).filter(Boolean);
    return {
      key: "lovers",
      title: "Victoire des amoureux",
      description: `${formatList(lovers.map((player) => player.name))} survivent seuls et gagnent ensemble.`,
    };
  }

  if (
    livingFlutist &&
    livingPlayers.length > 1 &&
    livingPlayers.every((player) => player.id === livingFlutist.id || player.enchanted)
  ) {
    return {
      key: "flute",
      title: "Victoire du Joueur de Flûte",
      description: "Tous les autres survivants sont enchantés.",
    };
  }

  if (livingWolves.length === 0) {
    return {
      key: "village",
      title: "Victoire du village",
      description: "Tous les Loups-Garous ont été éliminés.",
    };
  }

  if (livingWolves.length >= livingPlayers.length - livingWolves.length) {
    return {
      key: "wolves",
      title: "Victoire des Loups-Garous",
      description: "Les loups sont au moins aussi nombreux que les autres survivants.",
    };
  }

  return null;
}

function prepareNextNightIntro() {
  state.game.scene = "night-intro";
  state.game.summary = null;
  state.game.postSummary = null;
  state.game.vote = null;
  state.game.judge = null;
  state.game.hunter = null;
  clearUiError();
}

function beginNight() {
  const game = state.game;
  game.nightNumber += 1;
  game.summary = null;
  game.postSummary = null;

  // Chaque joueur vivant passe une seule fois par nuit.
  // L'ordre reste role-oriente pour conserver les dependances:
  // sabotage -> loups/cupidon -> pouvoirs d'information -> roles passifs.
  game.night = {
    order: buildNightTurnOrder(game),
    turnIndex: 0,
    sabotageTargetId: null,
    wolfVictimId: null,
    bigBadWolfVictimId: null,
    wolfVotes: {},
    fluteTargets: [],
    witchChoice: {
      save: false,
      killId: null,
    },
    privateMessage: null,
  };

  prepareNightTurnCycle();
}

function prepareNightTurnCycle() {
  const game = state.game;
  game.night.turnIndex = 0;
  game.night.privateMessage = null;
  clearCampMessageDrafts(game);
  game.scene = "night-pass";
  clearUiError();
}

function moveToNextNightTurn() {
  const game = state.game;
  game.night.turnIndex += 1;
  game.night.privateMessage = null;
  clearCampMessageDrafts(game);

  if (game.night.turnIndex < game.night.order.length) {
    game.scene = "night-pass";
    clearUiError();
    return;
  }

  resolveNight();
}

function resolveNight() {
  const game = state.game;
  if (!game.night.wolfVictimId) {
    game.night.wolfVictimId = computeWolfVictimFromVotes(game);
  }

  // Résolution interne: loups -> sorcière -> enchantements -> morts publics.
  const wolfVictimId = getNightVictimFromWolves(game);
  const witch = findAliveRolePlayer(game, "witch");
  const witchCanAct = witch && !isPlayerSabotaged(game, witch.id);
  let savedTargetId = null;
  let witchKillId = null;

  if (
    witchCanAct &&
    game.night.witchChoice.save &&
    wolfVictimId &&
    !game.witchState.healUsed
  ) {
    savedTargetId = wolfVictimId;
    game.witchState.healUsed = true;
  }

  if (
    witchCanAct &&
    game.night.witchChoice.killId &&
    !game.witchState.killUsed
  ) {
    const target = getPlayer(game, game.night.witchChoice.killId);
    if (target && target.alive) {
      witchKillId = target.id;
      game.witchState.killUsed = true;
    }
  }

  const flutist = findAliveRolePlayer(game, "flute");
  if (flutist && !isPlayerSabotaged(game, flutist.id)) {
    game.night.fluteTargets.forEach((targetId) => {
      const target = getPlayer(game, targetId);
      if (target && target.alive) {
        target.enchanted = true;
      }
    });
  }

  const deathIds = [];
  if (wolfVictimId && wolfVictimId !== savedTargetId) {
    deathIds.push(wolfVictimId);
  }
  // Le Grand Mechant Loup ajoute une victime separee.
  // Si elle vise la meme cible que la meute, la deduplication finale evite un double deces,
  // mais la potion de vie ne sauve que la victime du vote normal des loups.
  if (game.night.bigBadWolfVictimId) {
    deathIds.push(game.night.bigBadWolfVictimId);
  }
  if (witchKillId) {
    deathIds.push(witchKillId);
  }

  const deaths = applyDeaths(game, [...new Set(deathIds)], "night");
  const names = deaths.map((player) => player.name);
  const text = names.length
    ? `Cette nuit, ${formatList(names)} ${names.length > 1 ? "sont morts" : "est mort"}.`
    : "Cette nuit, personne n'est mort.";

  game.summary = {
    title: `Fin de la nuit ${game.nightNumber}`,
    text,
  };
  game.scene = "night-summary";
  addHistory(game, `Nuit ${game.nightNumber}`, text);

  const roleHunterVictory = getRoleHunterVictory(game);
  if (roleHunterVictory) {
    game.postSummary = {
      type: "special-win",
      winner: roleHunterVictory,
    };
    return;
  }

  const hasHunterSequence = queueHunterIfNeeded(game, deaths, "night");
  game.postSummary = hasHunterSequence
    ? { type: "hunter", nextScene: "discussion" }
    : { type: "route-after-night" };
}

function continueAfterNightSummary() {
  const game = state.game;

  if (game.postSummary?.winner) {
    finalizeGameOver(game, game.postSummary.winner);
    return;
  }

  if (game.postSummary?.type === "hunter") {
    game.hunter.nextScene = game.postSummary.nextScene;
    game.scene = "hunter-pass";
    clearUiError();
    return;
  }

  const winner = checkVictory(game);
  if (winner) {
    finalizeGameOver(game, winner);
    return;
  }

  game.scene = "discussion";
  game.summary = null;
  game.postSummary = null;
}

function startVote() {
  const game = state.game;
  game.vote = {
    order: shuffleArray(getLivingPlayers(game).map((player) => player.id)),
    turnIndex: 0,
    votes: {},
    privateMessage: null,
    pendingResolution: null,
  };
  game.judge = null;
  game.scene = "vote-pass";
  clearUiError();
}

function moveToNextVoteTurn() {
  const game = state.game;
  game.vote.turnIndex += 1;
  game.vote.privateMessage = null;

  if (game.vote.turnIndex < game.vote.order.length) {
    game.scene = "vote-pass";
    clearUiError();
    return;
  }

  resolveVote();
}

function queueJudgeIfNeeded(game, eliminatedId) {
  if (!canJudgeReviewVote(game, eliminatedId)) {
    return false;
  }

  const judge = findAliveRolePlayer(game, "judge");
  game.judge = {
    judgeId: judge.id,
    targetId: eliminatedId,
    cancelVote: false,
    resultMessage: null,
  };
  game.scene = "judge-pass";
  clearUiError();
  return true;
}

function finalizeVoteResolution(game, { canceledByJudge = false } = {}) {
  const pendingResolution = game.vote?.pendingResolution || {
    eliminatedId: null,
    firstVote: game.dayVoteCount === 0,
  };
  const { eliminatedId, firstVote } = pendingResolution;
  let deaths = [];
  let text;
  let winner = null;

  if (canceledByJudge && eliminatedId) {
    const sparedPlayer = getPlayer(game, eliminatedId);
    text = sparedPlayer
      ? `Le vote est annule. ${sparedPlayer.name} est epargne.`
      : "Le vote est annule. Personne n'est elimine.";
  } else if (eliminatedId) {
    deaths = applyDeaths(game, [eliminatedId], "vote");
    const eliminated = deaths.find((player) => player.id === eliminatedId) || getPlayer(game, eliminatedId);
    text = appendLoverDeathText(
      `${eliminated.name} est elimine par le vote du village.`,
      deaths,
      eliminatedId
    );

    if (firstVote && eliminated.role === "angel") {
      winner = {
        key: "angel",
        title: "Victoire de l'Ange",
        description: "L'Ange a ete elimine lors du tout premier vote de jour.",
      };
    } else if (eliminated.role === "jester") {
      winner = {
        key: "jester",
        title: "Victoire du Bouffon",
        description: `${eliminated.name} a ete elimine directement par le vote du village et gagne immediatement.`,
      };
    }
  } else {
    text = "Egalite au vote: personne n'est elimine.";
  }

  addHistory(game, `Vote du jour ${game.nightNumber}`, text);
  game.summary = {
    title: `Resultat du vote ${game.nightNumber}`,
    text,
  };
  game.scene = "vote-summary";
  game.dayVoteCount += 1;
  game.angelCanWin = false;
  game.vote.pendingResolution = null;

  if (!winner) {
    winner = getRoleHunterVictory(game);
  }

  if (winner) {
    game.postSummary = {
      type: "special-win",
      winner,
    };
    return;
  }

  const hasHunterSequence = queueHunterIfNeeded(game, deaths, "vote");
  game.postSummary = hasHunterSequence
    ? { type: "hunter", nextScene: "night-intro" }
    : { type: "route-after-vote" };
}

function resolveVote() {
  const game = state.game;
  const counts = {};

  Object.values(game.vote.votes).forEach((targetId) => {
    counts[targetId] = (counts[targetId] || 0) + 1;
  });

  const entries = Object.entries(counts);
  const maxVotes = entries.length ? Math.max(...entries.map((entry) => entry[1])) : 0;
  const leaders = entries
    .filter((entry) => entry[1] === maxVotes)
    .map((entry) => entry[0]);

  // En cas d'égalité, personne n'est éliminé: c'est annoncé publiquement puis la partie continue.
  const eliminatedId = leaders.length === 1 ? leaders[0] : null;
  game.vote.pendingResolution = {
    eliminatedId,
    firstVote: game.dayVoteCount === 0,
  };

  if (queueJudgeIfNeeded(game, eliminatedId)) {
    return;
  }

  finalizeVoteResolution(game);
}

function continueAfterVoteSummary() {
  const game = state.game;

  if (game.postSummary?.winner) {
    finalizeGameOver(game, game.postSummary.winner);
    return;
  }

  if (game.postSummary?.type === "hunter") {
    game.hunter.nextScene = game.postSummary.nextScene;
    game.scene = "hunter-pass";
    clearUiError();
    return;
  }

  const winner = checkVictory(game);
  if (winner) {
    finalizeGameOver(game, winner);
    return;
  }

  prepareNextNightIntro();
}

function finishJudgeTurn() {
  const game = state.game;
  const canceledByJudge = Boolean(game.judge?.cancelVote);

  game.judge = null;
  finalizeVoteResolution(game, { canceledByJudge });
  clearUiError();
}

function finishHunterTurn() {
  const game = state.game;
  const hunterState = game.hunter;
  const hunter = getPlayer(game, hunterState.hunterId);

  if (hunter && hunterState.shotTargetId) {
    const deaths = applyDeaths(game, [hunterState.shotTargetId], "hunter");
    if (deaths.length > 0) {
      const target = deaths.find((player) => player.id === hunterState.shotTargetId) || deaths[0];
      addHistory(
        game,
        "Dernier tir",
        appendLoverDeathText(
          `${hunter.name} emporte ${target.name} dans sa chute.`,
          deaths,
          hunterState.shotTargetId
        )
      );
    }
  }

  if (hunter) {
    hunter.hunterShotUsed = true;
  }

  const winner = checkVictory(game);
  if (winner) {
    finalizeGameOver(game, winner);
    return;
  }

  game.scene = hunterState.nextScene;
  game.hunter = null;
  game.summary = null;
  game.postSummary = null;
  clearUiError();
}

function render() {
  app.innerHTML = `
    <section class="screen">
      ${
        state.screen === "home"
          ? renderHome()
          : state.screen === "setup"
            ? renderSetup()
            : renderGame()
      }
    </section>
  `;
}

function renderHome() {
  return `
    <article class="card hero-card stack">
      <div>
        <p class="eyebrow">Sans narrateur humain</p>
        <h1 class="title">Loup-Garou Solo Phone</h1>
        <p class="subtitle">
          Un jeu social inspiré du Loup-Garou de Thiercelieux, conçu pour un seul téléphone que les joueurs se passent physiquement.
        </p>
      </div>

      <div class="pill-row">
        <span class="pill highlight">Mobile-first</span>
        <span class="pill">Rôles secrets</span>
        <span class="pill">Nuits automatisées</span>
      </div>

      <div class="info-box">
        Le téléphone gère l'entrée des joueurs, la distribution des rôles, les nuits, les votes, les éliminations et la victoire finale.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="open-setup">Nouvelle partie</button>
      </div>
    </article>
  `;
}

function renderSetup() {
  const validation = validateSetup(state.players, state.roleConfig);

  return `
    <article class="card stack">
      <header class="screen-header">
        <p class="eyebrow">Configuration</p>
        <h1 class="screen-title">Prépare la partie</h1>
        <p class="screen-text">
          Saisis les prénoms, compose les rôles, puis lance une partie jouable sur ce seul téléphone.
        </p>
      </header>

      ${renderUiError()}

      <section class="stack">
        <div class="section-title">
          <h2>Joueurs</h2>
          <span class="pill">${state.players.length} ${pluralize(state.players.length, "joueur")}</span>
        </div>

        <form class="input-row" data-form="player-form">
          <input
            class="text-input"
            type="text"
            name="playerName"
            maxlength="20"
            autocomplete="off"
            placeholder="Entre un prénom"
            value="${escapeHtml(state.playerDraft)}"
          >
          <button class="btn btn-secondary" type="submit">Ajouter</button>
        </form>

        ${
          state.players.length
            ? `<div class="player-list">
                ${state.players
                  .map(
                    (player) => `
                      <div class="player-item">
                        <span class="player-name">${escapeHtml(player.name)}</span>
                        <button class="btn btn-danger" data-action="remove-player" data-player-id="${player.id}">
                          Retirer
                        </button>
                      </div>
                    `
                  )
                  .join("")}
              </div>`
            : `<div class="info-box">Ajoute les prénoms des joueurs autour de la table.</div>`
        }
      </section>

      <div class="divider"></div>

      <section class="stack">
        <div class="section-title">
          <h2>Composition des rôles</h2>
          <span class="pill">${validation.totalRoles}/${validation.playerCount || 0}</span>
        </div>

        <div class="info-box">
          Coche les rôles à utiliser. Les rôles multiples disposent d'une quantité. Le total doit correspondre exactement au nombre de joueurs.
        </div>

        <div class="role-list">
          ${ROLE_ORDER.map((roleId) => renderRoleConfigItem(roleId)).join("")}
        </div>
      </section>

      <section class="stack">
        ${
          validation.valid
            ? `<div class="success-box">
                Composition valide: ${validation.totalRoles} rôles pour ${validation.playerCount} joueurs.
              </div>`
            : `<div class="error-box">
                <ul class="clean-list">
                  ${validation.errors.map((error) => `<li>${escapeHtml(error)}</li>`).join("")}
                </ul>
              </div>`
        }

        <div class="footer-actions">
          <button class="btn btn-secondary" data-action="suggest-composition">Composition conseillée</button>
          <button class="btn btn-primary" data-action="start-game" ${validation.valid ? "" : "disabled"}>
            Commencer la partie
          </button>
          <button class="btn btn-ghost" data-action="back-home">Retour à l'accueil</button>
        </div>
      </section>
    </article>
  `;
}

function renderRoleConfigItem(roleId) {
  const role = ROLE_DEFINITIONS[roleId];
  const count = state.roleConfig[roleId];
  const checked = count > 0;

  return `
    <article class="role-item">
      <div class="role-head">
        <div>
          <h3 class="role-title">${role.name}</h3>
          <p class="role-description">${role.setupDescription}</p>
        </div>
        <span class="pill">${role.unique ? "Unique" : "Multiple"}</span>
      </div>

      <div class="role-controls">
        <label class="check-wrap">
          <input
            class="checkbox"
            type="checkbox"
            data-role-toggle="${roleId}"
            ${checked ? "checked" : ""}
          >
          <span>Activer</span>
        </label>

        ${
          role.unique
            ? `<span class="pill">${checked ? "1" : "0"}</span>`
            : `<label class="quantity-box">
                <span>Quantité</span>
                <input
                  class="number-input"
                  type="number"
                  min="1"
                  max="${Math.max(state.players.length, 1)}"
                  data-role-count="${roleId}"
                  value="${checked ? count : role.defaultCount}"
                  ${checked ? "" : "disabled"}
                >
              </label>`
        }
      </div>
    </article>
  `;
}

function renderGame() {
  switch (state.game.scene) {
    case "reveal-pass":
      return renderRevealPass();
    case "reveal-secret":
      return renderRevealSecret();
    case "night-intro":
      return renderNightIntro();
    case "night-pass":
      return renderNightPass();
    case "night-secret":
      return renderNightSecret();
    case "night-result":
      return renderNightResult();
    case "night-summary":
      return renderNightSummary();
    case "discussion":
      return renderDiscussion();
    case "vote-pass":
      return renderVotePass();
    case "vote-secret":
      return renderVoteSecret();
    case "vote-result":
      return renderVoteResult();
    case "vote-summary":
      return renderVoteSummary();
    case "judge-pass":
      return renderJudgePass();
    case "judge-secret":
      return renderJudgeSecret();
    case "judge-result":
      return renderJudgeResult();
    case "hunter-pass":
      return renderHunterPass();
    case "hunter-secret":
      return renderHunterSecret();
    case "hunter-result":
      return renderHunterResult();
    case "game-over":
      return renderGameOver();
    default:
      return renderNightIntro();
  }
}

function renderHeaderBlock({ eyebrow, title, text, highlight = null }) {
  return `
    <header class="screen-header">
      <p class="eyebrow">${eyebrow}</p>
      <h1 class="screen-title">${title}</h1>
      <p class="screen-text">${text}</p>
    </header>
    ${
      highlight
        ? `<div class="pill-row"><span class="pill highlight">${highlight}</span></div>`
        : ""
    }
  `;
}

function renderPublicStatus() {
  const living = getLivingPlayers(state.game).length;
  const dead = getDeadPlayers(state.game).length;
  return `
    <div class="stats-row">
      <span class="stat-pill highlight">Nuit ${state.game.nightNumber || 0}</span>
      <span class="stat-pill">${living} vivants</span>
      <span class="stat-pill">${dead} morts</span>
    </div>
  `;
}

function renderRosterSummary() {
  const living = getLivingPlayers(state.game);
  const dead = getDeadPlayers(state.game);

  return `
    <section class="summary-grid">
      <div>
        <div class="section-title">
          <h3>Survivants</h3>
        </div>
        <div class="name-grid">
          ${living.map((player) => `<span class="name-chip">${escapeHtml(player.name)}</span>`).join("")}
        </div>
      </div>
      <div>
        <div class="section-title">
          <h3>Éliminés</h3>
        </div>
        ${
          dead.length
            ? `<div class="name-grid">
                ${dead
                  .map((player) => `<span class="name-chip dead">${escapeHtml(player.name)}</span>`)
                  .join("")}
              </div>`
            : `<p class="muted">Personne pour l'instant.</p>`
        }
      </div>
      ${
        state.game.history.length
          ? `<div class="history-card">
              <h3>Derniers événements</h3>
              <div class="compact-stack">
                ${state.game.history
                  .map(
                    (item) => `
                      <div>
                        <strong>${escapeHtml(item.title)}</strong>
                        <p>${escapeHtml(item.text)}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>`
          : ""
      }
    </section>
  `;
}

function renderUiError() {
  return state.uiError ? `<div class="error-box">${escapeHtml(state.uiError)}</div>` : "";
}

function renderCampThreadPanel(player) {
  const camp = getPlayerCamp(player);
  const meta = getCampThreadMeta(camp);

  if (!camp || !meta) {
    return "";
  }

  const messages = getCampThread(state.game, camp);
  const draft = state.game.campMessageDrafts[camp] || "";
  const hasSentMessage = hasSentCampMessageThisTurn(state.game, player, camp);

  return `
    <section class="camp-thread ${camp}">
      <div class="section-title">
        <h3>${meta.title}</h3>
        <span class="pill">${messages.length} ${pluralize(messages.length, "message")}</span>
      </div>
      <p class="camp-thread-description">${meta.description}</p>

      <div class="camp-thread-feed">
        ${
          messages.length
            ? messages
                .map((message) => {
                  return `
                    <article class="camp-thread-message ${message.camp}">
                      ${
                        message.authorName
                          ? `<div class="camp-thread-author">${escapeHtml(message.authorName)}</div>`
                          : ""
                      }
                      <p class="camp-thread-text">${escapeHtml(message.content)}</p>
                    </article>
                  `;
                })
                .join("")
            : `<div class="camp-thread-empty">${meta.emptyText}</div>`
        }
      </div>

      ${
        hasSentMessage
          ? `<div class="success-box">Message de ce tour deja envoye.</div>`
          : ""
      }

      <form class="stack" data-form="camp-message">
        <input type="hidden" name="camp" value="${camp}">
        <div class="field-group">
          <label class="field-label" for="camp-message-${camp}">Nouveau message</label>
          <textarea
            id="camp-message-${camp}"
            class="message-input"
            name="messageContent"
            rows="4"
            maxlength="${MAX_CAMP_MESSAGE_LENGTH}"
            placeholder="${meta.placeholder}"
            data-message-draft-camp="${camp}"
            ${hasSentMessage ? "disabled" : ""}
          >${escapeHtml(draft)}</textarea>
        </div>
        <button class="btn btn-secondary" type="submit" ${hasSentMessage ? "disabled" : ""}>${meta.submitLabel}</button>
      </form>
    </section>
  `;
}

function renderNightCampAccess(player, { noticeText, noticeClass = "info-box", showContinueButton = true } = {}) {
  return `
    ${noticeText ? `<div class="${noticeClass}">${noticeText}</div>` : ""}
    ${renderCampThreadPanel(player)}
    ${
      showContinueButton
        ? `<div class="button-row">
            <button class="btn btn-secondary" data-action="skip-night-action">Continuer</button>
          </div>`
        : ""
    }
  `;
}

function renderRevealPass() {
  const player = getPlayer(state.game, state.game.revealOrder[state.game.revealIndex]);
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: "Distribution secrète",
        title: `Passe le téléphone à ${escapeHtml(player.name)}`,
        text: "Le joueur doit regarder seul l'écran, découvrir son rôle, puis rendre le téléphone au groupe.",
        highlight: `${state.game.revealIndex + 1}/${state.game.revealOrder.length}`,
      })}

      <div class="info-box">
        Les rôles sont révélés un par un. Personne d'autre ne doit regarder l'écran.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="show-role">Je prends le téléphone</button>
      </div>
    </article>
  `;
}

function renderRevealSecret() {
  const player = getPlayer(state.game, state.game.revealOrder[state.game.revealIndex]);
  const role = ROLE_DEFINITIONS[player.role];
  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Écran secret",
        title: escapeHtml(player.name),
        text: "Lis ton rôle en secret, mémorise-le, puis passe au joueur suivant.",
      })}

      <section class="role-reveal">
        <p class="eyebrow">Ton rôle</p>
        <h2 class="role-name">${role.name}</h2>
        <p class="role-goal">${role.revealDescription}</p>
        <p class="role-goal"><strong>Objectif:</strong> ${role.objective}</p>
      </section>

      ${renderRoleHunterNotice(player)}

      <div class="button-row">
        <button class="btn btn-primary" data-action="confirm-role">J'ai vu mon rôle</button>
      </div>
    </article>
  `;
}

function renderLoverNotice(player) {
  const lover = getPlayerLover(state.game, player.id);
  if (!lover) {
    return "";
  }

  return `
    <section class="lover-notice">
      <strong>&#10084; Tu es en couple avec ${escapeHtml(lover.name)}</strong>
    </section>
  `;
}

function renderRoleHunterNotice(player) {
  const target = getRoleHunterTarget(state.game, player);
  if (!target) {
    return "";
  }

  return `
    <section class="info-box">
      <strong>Ta cible est : ${escapeHtml(target.name)}</strong>
    </section>
  `;
}

function renderNightIntro() {
  const totalTurns = getLivingPlayers(state.game).length;
  const introText = totalTurns
    ? `Le telephone guidera ${totalTurns} ${pluralize(totalTurns, "passage nocturne", "passages nocturnes")} secrets, avec un seul passage par joueur vivant.`
    : "Le telephone guidera la nuit en silence pour preserver les secrets.";
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: "Début de partie",
        title: state.game.nightNumber === 0 ? "La partie commence" : `La nuit ${state.game.nightNumber + 1} approche`,
        text: introText,
      })}

      ${renderPublicStatus()}
      ${renderRosterSummary()}

      <div class="info-box">
        À chaque étape, le téléphone indiquera clairement à qui le passer. Tous les joueurs verront une interface proche afin de limiter les fuites d'information.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="start-night">Commencer la nuit</button>
      </div>
    </article>
  `;
}

function renderNightPass() {
  const player = getCurrentNightPlayer(state.game);
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: getNightStageLabel(state.game),
        title: `Passe le téléphone à ${escapeHtml(player.name)}`,
        text: "Le joueur prend le téléphone seul, lit l'écran en secret, puis suit les instructions affichées.",
      })}

      <div class="info-box">
        Cette étape ne révèle pas publiquement quel rôle agit. Les autres joueurs doivent détourner le regard.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="begin-night-turn">Je prends le téléphone</button>
      </div>
    </article>
  `;
}

function renderNightSecret() {
  const game = state.game;
  const player = getCurrentNightPlayer(game);

  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: getNightStageLabel(game),
        title: "Regarde l'écran en secret",
        text: "Regroupe ici ton action de nuit et, si c'est autorise, ton message de camp avant de continuer.",
      })}

      ${renderUiError()}
      ${renderLoverNotice(player)}
      ${renderRoleHunterNotice(player)}
      ${renderNightSecretContent(player)}
    </article>
  `;
}

function renderNightSecretContent(player) {
  if (player.role === "saboteur") {
    return renderSabotageContent(player);
  }

  if (isWolfRole(player.role) || canPlayerUseCupidAction(state.game, player)) {
    return renderWolvesContent(player);
  }

  return renderPowerContent(player);
}

function renderSabotageContent(player) {
  if (player.role !== "saboteur" || !player.alive) {
    return renderNightCampAccess(player, {
      noticeText: "Aucune action a cette etape. Utilise le fil de ton camp puis rends le telephone.",
    });
  }

  const targets = getLivingPlayers(state.game).filter((candidate) => candidate.id !== player.id);

  if (!targets.length) {
    return renderNightCampAccess(player, {
      noticeText: "Aucune cible valide cette nuit. Tu peux tout de meme consulter le fil de ton camp.",
    });
  }

  return renderNightActionPanel(
    player,
    `
      <form class="stack" data-form="night-action">
        <input type="hidden" name="actionType" value="sabotage">
        <div class="info-box">
          Choisis un joueur a saboter. Son pouvoir nocturne ne fonctionnera pas cette nuit.
        </div>
        <div class="target-list">
          ${renderRadioTargetList(targets, "targetId")}
        </div>
        <button class="btn btn-primary" type="submit">Confirmer le sabotage</button>
      </form>
    `
  );
}

function renderWolvesContent(player) {
  if (canPlayerUseCupidAction(state.game, player)) {
    return renderNightActionPanel(
      player,
      `
        <form class="stack" data-form="night-action">
          <input type="hidden" name="actionType" value="cupid">
          <div class="info-box">
            Tu es Cupidon. Choisis deux joueurs differents a lier en secret.
          </div>
          <div class="target-list">
            ${renderCheckboxTargetList(state.game.players, "loverIds")}
          </div>
          <button class="btn btn-primary" type="submit">Lier les amoureux</button>
        </form>
      `
    );
  }

  if (!isWolfRole(player.role) || !player.alive) {
    return renderNightCampAccess(player, {
      noticeText: "Aucune action a cette etape. Utilise le fil de ton camp puis rends le telephone.",
    });
  }

  if (isPlayerSabotaged(state.game, player.id)) {
    return renderNightCampAccess(player, {
      noticeText: "Tu as ete sabote cette nuit. Ton vote de loup ne peut pas etre utilise, mais tu peux toujours ecrire a la meute.",
      noticeClass: "error-box",
    });
  }

  const targets = getLivingPlayers(state.game).filter((candidate) => !isWolfRole(candidate.role));
  const canUseExtraKill = canBigBadWolfUseExtraKill(state.game, player);

  if (!targets.length) {
    return renderNightCampAccess(player, {
      noticeText: "Aucune victime possible a cette etape. Tu peux quand meme coordonner la suite avec la meute.",
    });
  }

  return renderNightActionPanel(
    player,
    `
      <form class="stack" data-form="night-action">
        <input type="hidden" name="actionType" value="wolf-vote">
        <div class="info-box">
          Vote en secret pour une victime. Les votes des loups seront comptes en fin de nuit.
        </div>
        <div class="target-list">
          ${renderRadioTargetList(targets, "targetId")}
        </div>

        ${
          canUseExtraKill
            ? `
              <div class="inline-grid">
                <div class="field-label">Pouvoir du Grand Mechant Loup</div>
                <label class="target-option">
                  <input type="radio" name="extraTargetId" value="" checked>
                  <span>
                    <strong>Ne tuer personne en plus</strong>
                    <em>Conserver ton pouvoir special cette nuit</em>
                  </span>
                </label>
                ${renderRadioTargetList(targets, "extraTargetId", true)}
              </div>
            `
            : ""
        }

        <button class="btn btn-primary" type="submit">Valider la cible</button>
      </form>
    `
  );
}

function renderPowerContent(player) {
  if (player.role === "seer") {
    return renderSeerContent(player);
  }

  if (player.role === "spy") {
    return renderSpyContent(player);
  }

  if (player.role === "flute") {
    return renderFluteContent(player);
  }

  if (player.role === "witch") {
    return renderWitchContent(player);
  }

  return renderNightCampAccess(player, {
    noticeText: "Aucune action a cette etape. Utilise le fil de ton camp puis rends le telephone.",
  });
}

function renderSpyContent(player) {
  if (isPlayerSabotaged(state.game, player.id)) {
    return renderNightCampAccess(player, {
      noticeText: "Tu as ete sabote cette nuit. Tu ne peux pas intercepter les loups, mais tu peux toujours ecrire a ton camp.",
      noticeClass: "error-box",
    });
  }

  const wolfMessages = getCampThread(state.game, "wolves");
  if (!wolfMessages.length) {
    return renderNightCampAccess(player, {
      noticeText: "Aucun message des loups n'est encore disponible a intercepter cette nuit.",
    });
  }

  return renderNightActionPanel(
    player,
    `
      <form class="stack" data-form="night-action">
        <input type="hidden" name="actionType" value="spy">
        <div class="info-box">
          Intercepte un message choisi au hasard dans le fil des loups. Son auteur restera cache.
        </div>
        <button class="btn btn-primary" type="submit">Intercepter un message</button>
      </form>
    `
  );
}

function renderSeerContent(player) {
  if (isPlayerSabotaged(state.game, player.id)) {
    return renderNightCampAccess(player, {
      noticeText: "La nuit brouille ta vision: tu ne vois rien cette fois, mais tu peux toujours laisser un message a ton camp.",
      noticeClass: "error-box",
    });
  }

  const targets = getLivingPlayers(state.game).filter((candidate) => candidate.id !== player.id);

  if (!targets.length) {
    return renderNightCampAccess(player, {
      noticeText: "Personne a observer cette nuit. Tu peux tout de meme ecrire a ton camp.",
    });
  }

  return renderNightActionPanel(
    player,
    `
      <form class="stack" data-form="night-action">
        <input type="hidden" name="actionType" value="seer">
        <div class="info-box">Choisis un joueur vivant pour reveler son role exact.</div>
        <div class="target-list">
          ${renderRadioTargetList(targets, "targetId")}
        </div>
        <button class="btn btn-primary" type="submit">Observer ce joueur</button>
      </form>
    `
  );
}

function renderFluteContent(player) {
  if (isPlayerSabotaged(state.game, player.id)) {
    return renderNightCampAccess(player, {
      noticeText: "Tes notes se perdent dans la nuit: personne n'est enchante, mais tu peux toujours utiliser le fil de ton camp.",
      noticeClass: "error-box",
    });
  }

  const targets = getLivingPlayers(state.game).filter((candidate) => candidate.id !== player.id);
  const required = Math.min(2, targets.length);

  if (required === 0) {
    return renderNightCampAccess(player, {
      noticeText: "Aucune cible disponible pour la flute cette nuit. Tu peux tout de meme laisser un message.",
    });
  }

  return renderNightActionPanel(
    player,
    `
      <form class="stack" data-form="night-action">
        <input type="hidden" name="actionType" value="flute">
        <input type="hidden" name="requiredCount" value="${required}">
        <div class="info-box">
          Choisis ${required} ${pluralize(required, "joueur")} a enchanter. Les joueurs deja enchantes peuvent etre recibles sans perdre leur etat.
        </div>
        <div class="target-list">
          ${renderCheckboxTargetList(targets, "targets")}
        </div>
        <button class="btn btn-primary" type="submit">Jouer la flute</button>
      </form>
    `
  );
}

function renderWitchContent(player) {
  const wolfVictimId = getNightVictimFromWolves(state.game);
  const wolfVictim = wolfVictimId ? getPlayer(state.game, wolfVictimId) : null;

  if (isPlayerSabotaged(state.game, player.id)) {
    return renderNightCampAccess(player, {
      noticeText: "Tu es sabotee cette nuit. Aucune potion ne peut etre utilisee, mais tu peux toujours ecrire a ton camp.",
      noticeClass: "error-box",
    });
  }

  const canSave = Boolean(wolfVictim && !state.game.witchState.healUsed);
  const canKill = !state.game.witchState.killUsed;
  const killTargets = getLivingPlayers(state.game).filter((candidate) => {
    return candidate.id !== player.id && candidate.id !== wolfVictimId;
  });

  if (!canSave && (!canKill || killTargets.length === 0)) {
    return renderNightCampAccess(player, {
      noticeText: "Aucune action disponible cette nuit. Tes potions sont epuisees ou sans cible valide, mais ton camp peut toujours recevoir un message.",
    });
  }

  return renderNightActionPanel(
    player,
    `
      <form class="stack" data-form="night-action">
        <input type="hidden" name="actionType" value="witch">
        <div class="info-box">
          ${
            wolfVictim
              ? `Les loups visent <strong>${escapeHtml(wolfVictim.name)}</strong>.`
              : "Les loups n'ont designe aucune victime certaine pour l'instant."
          }
        </div>

        ${
          canSave
            ? `<label class="target-option">
                <input type="checkbox" name="save">
                <span>
                  <strong>Utiliser la potion de vie</strong>
                  <em>Sauver ${escapeHtml(wolfVictim.name)}</em>
                </span>
              </label>`
            : `<div class="muted">${
                state.game.witchState.healUsed ? "Potion de vie deja utilisee." : "Pas de potion de vie a utiliser."
              }</div>`
        }

        ${
          canKill && killTargets.length
            ? `
              <div class="inline-grid">
                <div class="field-label">Potion de mort</div>
                <label class="target-option">
                  <input type="radio" name="killTargetId" value="" checked>
                  <span>
                    <strong>Ne tuer personne</strong>
                    <em>Conserver la potion</em>
                  </span>
                </label>
                ${renderRadioTargetList(killTargets, "killTargetId", true)}
              </div>
            `
            : `<div class="muted">${
                state.game.witchState.killUsed ? "Potion de mort deja utilisee." : "Aucune cible valide pour la potion de mort."
              }</div>`
        }

        <button class="btn btn-primary" type="submit">Valider les potions</button>
      </form>
    `
  );
}

function renderRadioTargetList(targets, fieldName, allowBlank = false) {
  return targets
    .map((target, index) => {
      const checked = !allowBlank && index === 0 ? "checked" : "";
      const enchantedText = target.enchanted ? "Déjà enchanté" : "Vivant";
      return `
        <label class="target-option">
          <input type="radio" name="${fieldName}" value="${target.id}" ${checked}>
          <span>
            <strong>${escapeHtml(target.name)}</strong>
            <em>${enchantedText}</em>
          </span>
        </label>
      `;
    })
    .join("");
}

function renderCheckboxTargetList(targets, fieldName) {
  return targets
    .map((target) => {
      const extra = target.enchanted ? "Déjà enchanté" : "Disponible";
      return `
        <label class="target-option">
          <input type="checkbox" name="${fieldName}" value="${target.id}">
          <span>
            <strong>${escapeHtml(target.name)}</strong>
            <em>${extra}</em>
          </span>
        </label>
      `;
    })
    .join("");
}

function renderNightResult() {
  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: getNightStageLabel(state.game),
        title: "Étape terminée",
        text: state.game.night.privateMessage?.text || "Ton passage est terminé. Passe le téléphone au joueur suivant.",
      })}

      <div class="info-box">${state.game.night.privateMessage?.detail || "Rends maintenant le téléphone sans commenter l'écran."}</div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="ack-night-result">Passer au joueur suivant</button>
      </div>
    </article>
  `;
}

function renderNightSummary() {
  const buttonText = state.game.postSummary?.winner ? "Voir le gagnant" : "Continuer";
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: "Aube",
        title: state.game.summary.title,
        text: state.game.summary.text,
      })}

      ${renderPublicStatus()}
      ${renderRosterSummary()}

      <div class="button-row">
        <button class="btn btn-primary" data-action="continue-after-night-summary">${buttonText}</button>
      </div>
    </article>
  `;
}

function renderDiscussion() {
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: `Jour ${state.game.nightNumber}`,
        title: "Discussion",
        text: "Débattez librement autour de la table, puis passez au vote secret.",
      })}

      ${renderPublicStatus()}
      ${renderRosterSummary()}

      <div class="info-box">
        Le vote sera secret: le téléphone passera ensuite à chaque survivant pour enregistrer sa voix individuellement.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="start-vote">Passer au vote</button>
      </div>
    </article>
  `;
}

function renderVotePass() {
  const player = getCurrentVotePlayer(state.game);
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: `Vote secret ${state.game.nightNumber}`,
        title: `Passe le téléphone à ${escapeHtml(player.name)}`,
        text: "Le joueur vote seul, en secret, puis rend le téléphone au groupe.",
        highlight: `${state.game.vote.turnIndex + 1}/${state.game.vote.order.length}`,
      })}

      <div class="info-box">
        Les votes sont enregistrés discrètement puis résolus à la fin du tour complet.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="begin-vote-turn">Je prends le téléphone</button>
      </div>
    </article>
  `;
}

function renderVoteSecret() {
  const player = getCurrentVotePlayer(state.game);
  const targets = getLivingPlayers(state.game).filter((candidate) => candidate.id !== player.id);

  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Vote secret",
        title: "Vote en secret",
        text: "Choisis un joueur vivant à éliminer, puis confirme sans parler.",
      })}

      ${renderUiError()}
      ${renderLoverNotice(player)}
      ${renderRoleHunterNotice(player)}
      <form class="stack" data-form="vote-action">
        <div class="target-list">
          ${renderRadioTargetList(targets, "targetId")}
        </div>
        <button class="btn btn-primary" type="submit">Valider mon vote</button>
      </form>
    </article>
  `;
}

function renderVoteResult() {
  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Vote secret",
        title: "Vote enregistré",
        text: "Ton vote est mémorisé. Passe maintenant le téléphone au joueur suivant.",
      })}

      <div class="button-row">
        <button class="btn btn-primary" data-action="ack-vote-result">Continuer</button>
      </div>
    </article>
  `;
}

function renderVoteSummary() {
  const buttonText = state.game.postSummary?.winner ? "Voir le gagnant" : "Continuer";
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: `Jour ${state.game.nightNumber}`,
        title: state.game.summary.title,
        text: state.game.summary.text,
      })}

      ${renderPublicStatus()}
      ${renderRosterSummary()}

      <div class="button-row">
        <button class="btn btn-primary" data-action="continue-after-vote-summary">${buttonText}</button>
      </div>
    </article>
  `;
}

function renderJudgePass() {
  const judge = getCurrentJudge(state.game);
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: "Controle du vote",
        title: `Passe le telephone a ${escapeHtml(judge.name)}`,
        text: "Une verification secrete a lieu avant d'annoncer publiquement le resultat du vote.",
      })}

      <div class="info-box">
        Le joueur concerne lit l'ecran seul, prend sa decision, puis rend le telephone.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="begin-judge-turn">Je prends le telephone</button>
      </div>
    </article>
  `;
}

function renderJudgeSecret() {
  const judge = getCurrentJudge(state.game);
  const target = state.game.judge ? getPlayer(state.game, state.game.judge.targetId) : null;

  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Controle du vote",
        title: "Decision du Juge",
        text: "Tu peux une seule fois annuler l'elimination issue du vote avant son application.",
      })}

      ${renderUiError()}
      ${renderLoverNotice(judge)}
      ${renderRoleHunterNotice(judge)}

      <form class="stack" data-form="judge-action">
        <div class="info-box">
          ${
            target
              ? `Le vote eliminerait <strong>${escapeHtml(target.name)}</strong>. Veux-tu annuler cette elimination ?`
              : "Le vote a designe une cible. Veux-tu annuler cette elimination ?"
          }
        </div>

        <label class="target-option">
          <input type="radio" name="decision" value="keep" checked>
          <span>
            <strong>Ne rien faire</strong>
            <em>Le vote s'applique normalement</em>
          </span>
        </label>

        <label class="target-option">
          <input type="radio" name="decision" value="cancel">
          <span>
            <strong>Annuler le vote</strong>
            <em>Ton pouvoir sera consomme pour le reste de la partie</em>
          </span>
        </label>

        <button class="btn btn-primary" type="submit">Confirmer ma decision</button>
      </form>
    </article>
  `;
}

function renderJudgeResult() {
  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Controle du vote",
        title: "Decision enregistree",
        text: state.game.judge?.resultMessage || "Ta decision est memorisee.",
      })}

      <div class="button-row">
        <button class="btn btn-primary" data-action="ack-judge-result">Continuer</button>
      </div>
    </article>
  `;
}

function renderHunterPass() {
  const hunter = getCurrentHunter(state.game);
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: "Dernier tir",
        title: `Passe le téléphone à ${escapeHtml(hunter.name)}`,
        text: "Le Chasseur tombe, mais il tire une dernière fois avant de quitter la partie.",
      })}

      <div class="info-box">
        Ce passage n'apparaît que lorsque le Chasseur meurt et peut encore agir.
      </div>

      <div class="button-row">
        <button class="btn btn-primary" data-action="begin-hunter-turn">Je prends le téléphone</button>
      </div>
    </article>
  `;
}

function renderHunterSecret() {
  const hunter = getCurrentHunter(state.game);
  const targets = getLivingPlayers(state.game).filter((candidate) => candidate.id !== hunter.id);

  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Dernier tir",
        title: "Choisis ta dernière cible",
        text: "Élimine immédiatement un joueur vivant avant de quitter la partie.",
      })}

      ${renderUiError()}
      ${renderLoverNotice(hunter)}
      ${
        targets.length
          ? `<form class="stack" data-form="hunter-action">
              <div class="target-list">
                ${renderRadioTargetList(targets, "targetId")}
              </div>
              <button class="btn btn-primary" type="submit">Tirer</button>
            </form>`
          : `<div class="info-box">Aucune cible valide à emporter avec toi.</div>
             <div class="button-row">
               <button class="btn btn-secondary" data-action="skip-hunter-action">Continuer</button>
             </div>`
      }
    </article>
  `;
}

function renderHunterResult() {
  return `
    <article class="card stack secret-card">
      ${renderHeaderBlock({
        eyebrow: "Dernier tir",
        title: "Action terminée",
        text: state.game.hunter.resultMessage || "Le dernier tir est résolu.",
      })}

      <div class="button-row">
        <button class="btn btn-primary" data-action="ack-hunter-result">Continuer</button>
      </div>
    </article>
  `;
}

function renderGameOver() {
  return `
    <article class="card stack">
      ${renderHeaderBlock({
        eyebrow: "Fin de partie",
        title: state.game.winner.title,
        text: state.game.winner.description,
      })}

      <div class="success-box">
        La partie est terminée. Tous les rôles sont révélés ci-dessous.
      </div>

      <section class="final-grid">
        ${state.game.players
          .map((player) => {
            const role = ROLE_DEFINITIONS[player.role];
            const lover = getPlayerLover(state.game, player.id);
            const roleHunterTarget = getRoleHunterTarget(state.game, player);
            return `
              <article class="final-player">
                <div class="final-top">
                  <strong>${escapeHtml(player.name)}</strong>
                  <span class="badge ${player.alive ? "" : "dead"}">${player.alive ? "Vivant" : "Mort"}</span>
                </div>
                <div>${role.name}</div>
                ${
                  player.enchanted
                    ? `<div class="muted">Enchanté</div>`
                    : `<div class="muted">Non enchanté</div>`
                }
                ${
                  lover
                    ? `<div class="muted">Amoureux avec ${escapeHtml(lover.name)}</div>`
                    : ""
                }
                ${
                  roleHunterTarget
                    ? `<div class="muted">Cible secrete: ${escapeHtml(roleHunterTarget.name)}</div>`
                    : ""
                }
              </article>
            `;
          })
          .join("")}
      </section>

      <div class="footer-actions">
        <button class="btn btn-primary" data-action="restart-setup">Nouvelle partie</button>
        <button class="btn btn-ghost" data-action="back-home">Retour à l'accueil</button>
      </div>
    </article>
  `;
}

function handleClick(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const { action, playerId } = button.dataset;

  switch (action) {
    case "open-setup":
      state.screen = "setup";
      state.players = [];
      state.roleConfig = createEmptyRoleConfig();
      state.playerDraft = "";
      state.game = null;
      clearUiError();
      render();
      break;

    case "back-home":
      state.screen = "home";
      state.game = null;
      clearUiError();
      render();
      break;

    case "remove-player":
      state.players = state.players.filter((player) => player.id !== playerId);
      syncRoleInputsToPlayerCount();
      clearUiError();
      render();
      break;

    case "suggest-composition":
      state.roleConfig = getSuggestedComposition(state.players.length);
      clearUiError();
      render();
      break;

    case "start-game":
      startGame();
      break;

    case "show-role":
      state.game.scene = "reveal-secret";
      clearUiError();
      render();
      break;

    case "confirm-role":
      state.game.revealIndex += 1;
      clearUiError();
      if (state.game.revealIndex < state.game.revealOrder.length) {
        state.game.scene = "reveal-pass";
      } else {
        prepareNextNightIntro();
      }
      clearUiError();
      render();
      break;

    case "start-night":
      beginNight();
      render();
      break;

    case "begin-night-turn":
      state.game.scene = "night-secret";
      clearUiError();
      render();
      break;

    case "skip-night-action":
      clearCampMessageDrafts(state.game);
      state.game.night.privateMessage = {
        text: "Aucune action publique n'a été révélée.",
        detail: "Rends maintenant le téléphone discrètement.",
      };
      state.game.scene = "night-result";
      clearUiError();
      render();
      break;

    case "ack-night-result":
      moveToNextNightTurn();
      render();
      break;

    case "continue-after-night-summary":
      continueAfterNightSummary();
      render();
      break;

    case "start-vote":
      startVote();
      render();
      break;

    case "begin-vote-turn":
      state.game.scene = "vote-secret";
      clearUiError();
      render();
      break;

    case "ack-vote-result":
      moveToNextVoteTurn();
      render();
      break;

    case "continue-after-vote-summary":
      continueAfterVoteSummary();
      render();
      break;

    case "begin-judge-turn":
      state.game.scene = "judge-secret";
      clearUiError();
      render();
      break;

    case "ack-judge-result":
      finishJudgeTurn();
      render();
      break;

    case "begin-hunter-turn":
      state.game.scene = "hunter-secret";
      clearUiError();
      render();
      break;

    case "skip-hunter-action":
      state.game.hunter.resultMessage = "Aucune cible n'était encore vivante.";
      state.game.scene = "hunter-result";
      clearUiError();
      render();
      break;

    case "ack-hunter-result":
      finishHunterTurn();
      render();
      break;

    case "restart-setup":
      state.screen = "setup";
      state.game = null;
      state.playerDraft = "";
      state.players = [];
      state.roleConfig = createEmptyRoleConfig();
      clearUiError();
      render();
      break;

    default:
      break;
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const formType = form.dataset.form;

  if (formType === "player-form") {
    submitPlayer();
    return;
  }

  if (formType === "night-action") {
    submitNightAction(new FormData(form));
    return;
  }

  if (formType === "camp-message") {
    submitCampMessage(new FormData(form));
    return;
  }

  if (formType === "vote-action") {
    submitVoteAction(new FormData(form));
    return;
  }

  if (formType === "judge-action") {
    submitJudgeAction(new FormData(form));
    return;
  }

  if (formType === "hunter-action") {
    submitHunterAction(new FormData(form));
  }
}

function handleInput(event) {
  if (event.target.name === "playerName") {
    state.playerDraft = event.target.value;
    return;
  }

  const camp = event.target.dataset.messageDraftCamp;
  if (camp && state.game) {
    state.game.campMessageDrafts[camp] = event.target.value.slice(0, MAX_CAMP_MESSAGE_LENGTH);
  }
}

function handleChange(event) {
  const toggleRoleId = event.target.dataset.roleToggle;
  const countRoleId = event.target.dataset.roleCount;

  if (toggleRoleId) {
    const role = ROLE_DEFINITIONS[toggleRoleId];
    if (event.target.checked) {
      state.roleConfig[toggleRoleId] = role.unique ? 1 : Math.max(1, state.roleConfig[toggleRoleId] || role.defaultCount);
    } else {
      state.roleConfig[toggleRoleId] = 0;
    }
    clearUiError();
    render();
    return;
  }

  if (countRoleId) {
    const max = Math.max(state.players.length, 1);
    const parsed = Number.parseInt(event.target.value, 10);
    const safeValue = Number.isNaN(parsed) ? 1 : Math.min(Math.max(parsed, 1), max);
    state.roleConfig[countRoleId] = safeValue;
    clearUiError();
    render();
  }
}

function submitPlayer() {
  const name = sanitizePlayerName(state.playerDraft);

  if (!name) {
    setUiError("Entre un prénom avant d'ajouter un joueur.");
    render();
    return;
  }

  if (state.players.some((player) => player.name.toLowerCase() === name.toLowerCase())) {
    setUiError("Ce prénom est déjà présent dans la liste.");
    render();
    return;
  }

  state.players.push({
    id: createId("player"),
    name,
  });
  state.playerDraft = "";
  clearUiError();
  render();
}

function syncRoleInputsToPlayerCount() {
  const max = Math.max(state.players.length, 1);

  ROLE_ORDER.forEach((roleId) => {
    const role = ROLE_DEFINITIONS[roleId];
    if (role.unique) {
      state.roleConfig[roleId] = Math.min(state.roleConfig[roleId], 1);
      return;
    }
    if (state.roleConfig[roleId] > max) {
      state.roleConfig[roleId] = max;
    }
  });
}

function startGame() {
  const validation = validateSetup(state.players, state.roleConfig);
  if (!validation.valid) {
    setUiError(validation.errors[0]);
    render();
    return;
  }

  state.game = createGame();
  state.screen = "game";
  clearUiError();
  render();
}

function submitCampMessage(formData) {
  const game = state.game;
  const player = getCurrentCampMessagePlayer(game);
  const camp = formData.get("camp");

  if (!player) {
    return;
  }

  const allowedCamp = getPlayerCamp(player);
  const content = sanitizeCampMessage(formData.get("messageContent"));

  if (!allowedCamp || camp !== allowedCamp) {
    setUiError("Ce fil n'est pas disponible pour ce joueur.");
    render();
    return;
  }

  if (hasSentCampMessageThisTurn(game, player, allowedCamp)) {
    setUiError("Un seul message est autorise dans ce fil pendant ce tour.");
    render();
    return;
  }

  if (!content) {
    setUiError("Ecris un message avant de l'envoyer.");
    render();
    return;
  }

  const safeContent = content.slice(0, MAX_CAMP_MESSAGE_LENGTH);
  addCampMessage(game, player, safeContent);
  markCampMessageSent(game, player, allowedCamp);
  clearCampMessageDraft(game, allowedCamp);
  clearUiError();
  render();
}

function submitNightAction(formData) {
  const actionType = formData.get("actionType");
  const game = state.game;
  const player = getCurrentNightPlayer(game);

  if (actionType === "cupid") {
    const selectedIds = [...new Set(formData.getAll("loverIds"))];
    const selectedPlayers = selectedIds.map((playerId) => getPlayer(game, playerId)).filter(Boolean);

    if (!canPlayerUseCupidAction(game, player)) {
      setUiError("Cette action n'est pas disponible pour ce joueur.");
      render();
      return;
    }

    if (selectedIds.length !== 2 || selectedPlayers.length !== 2) {
      setUiError("Choisis exactement deux joueurs differents a lier.");
      render();
      return;
    }

    game.lovers = selectedIds;
    game.cupidUsed = true;
    game.night.privateMessage = {
      text: "Tes amoureux sont lies.",
      detail: "Ils decouvriront leur partenaire plus tard dans leurs ecrans secrets normaux.",
    };
  }

  if (actionType === "sabotage") {
    const targetId = formData.get("targetId");
    const target = getPlayer(game, targetId);
    if (!targetId || !target || !target.alive || target.id === player.id) {
      setUiError("Choisis une cible à saboter.");
      render();
      return;
    }

    game.night.sabotageTargetId = targetId;
    game.night.privateMessage = {
      text: "Ton sabotage est enregistré.",
      detail: "Le téléphone peut être rendu au groupe sans rien révéler.",
    };
  }

  if (actionType === "wolf-vote") {
    const targetId = formData.get("targetId");
    const extraTargetId = formData.get("extraTargetId") || null;
    const target = getPlayer(game, targetId);
    const extraTarget = extraTargetId ? getPlayer(game, extraTargetId) : null;

    if (!isWolfRole(player.role) || !player.alive) {
      setUiError("Cette action n'est pas disponible pour ce joueur.");
      render();
      return;
    }

    if (!targetId || !target || !target.alive || isWolfRole(target.role)) {
      setUiError("Choisis une victime.");
      render();
      return;
    }

    if (
      extraTargetId &&
      (!canBigBadWolfUseExtraKill(game, player) ||
        !extraTarget ||
        !extraTarget.alive ||
        isWolfRole(extraTarget.role))
    ) {
      setUiError("Choisis une cible valide pour le pouvoir du Grand Mechant Loup.");
      render();
      return;
    }

    game.night.wolfVotes[player.id] = targetId;
    if (canBigBadWolfUseExtraKill(game, player)) {
      game.night.bigBadWolfVictimId = extraTargetId || null;
    }
    game.night.privateMessage = {
      text: "Ta cible est enregistrée.",
      detail:
        canBigBadWolfUseExtraKill(game, player) && extraTargetId
          ? "Ton vote de meute et ta victime supplementaire sont enregistres."
          : "Le resultat final des loups sera resolu en fin de nuit.",
    };
  }

  if (actionType === "seer") {
    const targetId = formData.get("targetId");
    const target = getPlayer(game, targetId);
    if (!target || !target.alive || target.id === player.id) {
      setUiError("Choisis un joueur à observer.");
      render();
      return;
    }

    const role = ROLE_DEFINITIONS[target.role];
    game.night.privateMessage = {
      text: `${target.name} est ${role.name}.`,
      detail: "Mémorise cette information puis rends discrètement le téléphone.",
    };
  }

  if (actionType === "spy") {
    if (player.role !== "spy" || isPlayerSabotaged(game, player.id)) {
      setUiError("Cette interception n'est pas disponible pour ce joueur.");
      render();
      return;
    }

    const wolfMessages = getCampThread(game, "wolves");
    if (!wolfMessages.length) {
      setUiError("Aucun message des loups n'est disponible a intercepter.");
      render();
      return;
    }

    const interceptedMessage = sample(wolfMessages);
    game.night.privateMessage = {
      text: "Tu interceptes un message des loups.",
      detail: `Message lu: &laquo; ${escapeHtml(interceptedMessage.content)} &raquo;`,
    };
  }

  if (actionType === "flute") {
    const required = Number.parseInt(formData.get("requiredCount"), 10);
    const selected = formData.getAll("targets");
    const uniqueTargets = [...new Set(selected)];
    const areTargetsValid = uniqueTargets.every((targetId) => {
      const target = getPlayer(game, targetId);
      return target && target.alive && target.id !== player.id;
    });
    if (uniqueTargets.length !== required || !areTargetsValid) {
      setUiError(`Choisis exactement ${required} ${pluralize(required, "joueur")}.`);
      render();
      return;
    }

    game.night.fluteTargets = uniqueTargets;
    game.night.privateMessage = {
      text: "Tes cibles sont enchantées en fin de nuit.",
      detail: "Le groupe ne voit rien publiquement pour l'instant.",
    };
  }

  if (actionType === "witch") {
    const save = formData.get("save") === "on";
    const killId = formData.get("killTargetId") || null;
    const killTarget = killId ? getPlayer(game, killId) : null;
    const wolfVictimId = getNightVictimFromWolves(game);

    if (
      killId &&
      (!killTarget ||
        !killTarget.alive ||
        killTarget.id === player.id ||
        killTarget.id === wolfVictimId)
    ) {
      setUiError("Choisis une cible valide pour la potion de mort.");
      render();
      return;
    }

    game.night.witchChoice = {
      save,
      killId,
    };
    game.night.privateMessage = {
      text: save || killId ? "Tes potions sont prêtes." : "Tu conserves tes potions.",
      detail: "Le résultat sera appliqué en fin de nuit.",
    };
  }

  clearUiError();
  clearCampMessageDrafts(game);
  game.scene = "night-result";
  render();
}

function submitVoteAction(formData) {
  const player = getCurrentVotePlayer(state.game);
  const targetId = formData.get("targetId");
  const target = getPlayer(state.game, targetId);
  if (!targetId || !target || !target.alive || target.id === player.id) {
    setUiError("Choisis un joueur à éliminer.");
    render();
    return;
  }

  state.game.vote.votes[player.id] = targetId;
  state.game.vote.privateMessage = "Ton vote a bien été enregistré.";
  clearUiError();
  state.game.scene = "vote-result";
  render();
}

function submitJudgeAction(formData) {
  const game = state.game;
  const judge = getCurrentJudge(game);
  const decision = formData.get("decision");

  if (!judge || !game.judge) {
    return;
  }

  if (decision !== "keep" && decision !== "cancel") {
    setUiError("Choisis si tu annules le vote ou non.");
    render();
    return;
  }

  const cancelVote = decision === "cancel";
  game.judge.cancelVote = cancelVote;

  if (cancelVote) {
    game.judgePowerUsed = true;
    game.judge.resultMessage = "Le vote sera annule en secret. Ton pouvoir est maintenant consomme.";
  } else {
    game.judge.resultMessage = "Tu laisses le vote suivre son cours. Ton pouvoir reste disponible.";
  }

  clearUiError();
  game.scene = "judge-result";
  render();
}

function submitHunterAction(formData) {
  const targetId = formData.get("targetId");
  const target = getPlayer(state.game, targetId);

  if (!target || !target.alive) {
    setUiError("Choisis une cible encore vivante.");
    render();
    return;
  }

  const lover = getPlayerLover(state.game, target.id);
  state.game.hunter.shotTargetId = targetId;
  state.game.hunter.resultMessage =
    lover && lover.alive
      ? `${target.name} sera éliminé immédiatement, et ${lover.name} mourra aussi de chagrin.`
      : `${target.name} sera éliminé immédiatement.`;
  clearUiError();
  state.game.scene = "hunter-result";
  render();
}
