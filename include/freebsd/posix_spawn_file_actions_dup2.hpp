#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnDup2Def {
    static constexpr std::string_view name = "posix_spawn_file_actions_adddup2";
    static constexpr std::string_view desc = "Duplicate file descriptor in child process context";
};
}
