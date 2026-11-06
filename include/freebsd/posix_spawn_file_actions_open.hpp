#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnOpenDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addopen";
    static constexpr std::string_view desc = "Open file on target descriptor in child process context";
};
}
