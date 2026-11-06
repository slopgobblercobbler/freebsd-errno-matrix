#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnListenDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addlisten_np";
    static constexpr std::string_view desc = "Transition socket descriptor to listening state in child process context";
};
}
