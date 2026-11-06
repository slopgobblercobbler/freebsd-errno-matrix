#pragma once
#include <cstdint>
#include <string_view>

namespace freebsd {
struct PosixSpawnSetExecDef {
    static constexpr std::uint16_t flag_mask = 0x0100;
    static constexpr std::string_view flag_name = "POSIX_SPAWN_SETEXEC";
};
}
