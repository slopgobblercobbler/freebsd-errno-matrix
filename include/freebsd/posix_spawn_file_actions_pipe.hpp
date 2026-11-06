#pragma once
#include <string_view>

namespace freebsd {
struct PosixSpawnPipeDef {
    static constexpr std::string_view name = "posix_spawn_file_actions_addpipe_np";
    static constexpr std::string_view desc = "Create IPC pipe between specified descriptors in child process context";
};
}
