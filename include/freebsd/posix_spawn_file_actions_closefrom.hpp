#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnClosefromDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addclosefrom_np";
    static constexpr std::string_view desc = "Close all file descriptors greater than or equal to lowfd";
};
}
