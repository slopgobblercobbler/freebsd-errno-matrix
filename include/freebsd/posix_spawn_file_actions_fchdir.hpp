#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnFchdirDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addfchdir_np";
    static constexpr std::string_view desc = "Change directory by file descriptor in spawned process context";
};
}
