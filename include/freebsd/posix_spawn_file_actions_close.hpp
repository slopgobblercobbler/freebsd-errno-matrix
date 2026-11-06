#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnCloseDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addclose";
    static constexpr std::string_view desc = "Close file descriptor in spawned child process context";
};
}
