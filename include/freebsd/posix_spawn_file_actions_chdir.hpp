#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnChdirDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addchdir_np";
    static constexpr std::string_view desc = "Change working directory in spawned process context";
};
}
