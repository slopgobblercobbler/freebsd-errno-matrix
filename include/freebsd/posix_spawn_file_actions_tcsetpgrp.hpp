#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnTcSetPgrpDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addtcsetpgrp_np";
    static constexpr std::string_view desc = "Set controlling terminal foreground process group in spawned child";
};
}
